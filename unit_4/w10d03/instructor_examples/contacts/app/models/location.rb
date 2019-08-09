class Location

  DB = PG.connect({
    :host=> "localhost",
    :port=> 5432,
    :dbname => 'contacts_development'
    })

  def self.all
    results = DB.exec("SELECT * FROM locations;")
    results.map do |result|
      {
        "id" => result["id"].to_i,
        "street" => result["street"],
        "city" => result["city"],
        "state" => result["state"]
      }
    end # ends map do
  end # ends self.all

  def self.find(id)
    results = DB.exec("SELECT * FROM locations WHERE id=#{id}")
    return {
      "id" => results.first["id"].to_i,
      "street" => results.first["street"],
      "city" => results.first["city"],
      "state" => results.first["state"]
    }
  end

  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO locations (street, city, state)
        VALUES ('#{opts["street"]}', '#{opts["city"]}', '#{opts["state"]}')
        RETURNING id, street, city, state
      SQL
    )
    return {
      "id" => results.first["id"].to_i,
      "street" => results.first["street"],
      "city" => results.first["city"],
      "state" => results.first["state"]
    }
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM locations WHERE id=#{id};")
    return { "deleted" => true }
  end

  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE locations
        SET
          street='#{opts["street"]}',
          city ='#{opts["city"]}',
          state ='#{opts["state"]}'
        WHERE id=#{id}
        RETURNING id, street, city, state
      SQL
    )
    return {
      "id" => results.first["id"].to_i,
      "street" => results.first["street"],
      "city" => results.first["city"],
      "state" => results.first["state"]
    }
  end

end # ends class Location
