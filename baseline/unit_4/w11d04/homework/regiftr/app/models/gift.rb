class Gift
    # ==================================================
    #                      SET UP
    # ==================================================

    # add attribute readers for instance access
    attr_reader :id, :description, :value, :event, :gift_giver

    # connect to postgres
    DB = PG.connect(host: "localhost", port: 5432, dbname: 'regiftr_development')

    # initialize options hash
    def initialize(opts = {}, id = nil)
        @id = id.to_i
        @description = opts["description"]
        @value = opts["value"]
        @event = opts["event"]
        @gift_giver = opts["gift_giver"]
    end



        # ==================================================
        #                  PREPARED STATEMNETS
        # ==================================================

        DB.prepare("create_gift",
          <<-SQL
              INSERT INTO gifts (description, value, event, gift_giver)
              VALUES ( $1, $2, $3, $4)
              RETURNING id, description, value, event, gift_giver;
          SQL
        )

        DB.prepare("delete_gift",
          "DELETE FROM gifts WHERE id=$1 RETURNING id;"
        )

        DB.prepare("find_gift",
          <<-SQL
              SELECT
                  *
              FROM gifts
              WHERE id=$1;
          SQL
        )

        DB.prepare("update_gift",
          <<-SQL
              UPDATE gifts
              SET description=$2, value=$3, event=$4, gift_giver=$5
              WHERE id=$1
              RETURNING id, description, value, event, gift_giver;
          SQL
        )


            # ==================================================
            #                      ROUTES
            # ==================================================

            # get all
            def self.all
              results = DB.exec(
                  <<-SQL
                      SELECT
                        *
                      FROM gifts;
                  SQL
              )
              return results.map do |result|
                gift = Gift.new(result, result["id"])
                end
            end

            # get one by id
            def self.find(id)
                result = DB.exec_prepared("find_gift", [id]).first
                p result
                if result
                  return gift = Gift.new(result, result["id"])
                else
                  return {message: "sorry no gift found at this id: #{id}", status: 400}
                end
            end

            # create one
            def self.create(opts={})
              results = DB.exec_prepared("create_gift",
                [
                  opts["description"], opts["value"], opts["event"], opts["gift_giver"]
                  ]
                )
              return Gift.new(results.first, results.first["id"])
            end

            # delete one (by id)
            def self.delete(id)
              results = DB.exec_prepared("delete_gift", [id])
              p 'this is the result'
              p results
              if results.first
                return { deleted: true }
              else
                return { message: "sorry cannot find gift at id: #{id}", status: 400}
              end
            end

            # update one (by id)
            def self.update(id, opts={})
              results = DB.exec_prepared("update_gift",
                [
                  id, opts["description"], opts["value"], opts["event"], opts["gift_giver"]
                ]
              )
              if results.first
                return Gift.new(results.first, results.first["id"])
              else
                return { message: "sorry cannot find gift at id: #{id}", status: 400}
              end
            end

            # update company gift belongs to
            def self.setCompany(gift_id, company)
            results = DB.exec(
                <<-SQL
                    UPDATE gifts
                    SET company_id = #{company.id}
                    WHERE id = #{gift_id}
                    RETURNING id, name, age;
                SQL
            )
            return Gift.new(results.first, results.first["id"])
          end

        end
