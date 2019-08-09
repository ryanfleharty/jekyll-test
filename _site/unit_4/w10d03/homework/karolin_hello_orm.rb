require 'pp'

people = [
    {
        "name"=>"Gert",
        "age"=>"23",
        "home_id"=> "1",
        "home_street"=>"1600 Broadway",
        "home_city"=>"New York",
        "home_state"=>"NY",
        "home_zip_code"=> "10019"
    },
    {
        "name"=>"Alex",
        "age"=>"42",
        "home_id"=> "1",
        "home_street"=>"1600 Broadway",
        "home_city"=>"New York",
        "home_state"=>"NY",
        "home_zip_code"=> "10019"
    },
    {
        "name"=>"Nico",
        "age"=>"61",
        "home_id"=> "1",
        "home_street"=>"1600 Broadway",
        "home_city"=>"New York",
        "home_state"=>"NY",
        "home_zip_code"=> "10019"
    },
    {
        "name"=>"Molly",
        "age"=>"55",
        "home_id"=> "2",
        "home_street"=>"1 Alcatraz Island",
        "home_city"=>"San Francisco",
        "home_state"=>"CA",
        "home_zip_code"=> "94133"
    },
    {
        "name"=>"Old Lace",
        "age"=>"820",
    },
    {
        "name"=>"Karolina",
        "age"=>"82",
        "home_id"=> "2",
        "home_street"=>"1 Alcatraz Island",
        "home_city"=>"San Francisco",
        "home_state"=>"CA",
        "home_zip_code"=> "94133"
    }
]

def data_transforms_locations(person_array)
  homes = []
  last_home_id = nil
  # if home_id is equal to the next home_id DON'T PUSH the whole home
  # rather, just add to the inhabitants array
  for person in person_array do
    # if a person has a home
    if person["home_id"]
      # if home id DOES NOT equal last home id
      # make this new shape
      if person["home_id"] != last_home_id
        # reshape our data
        new_home_shape = {
          "id" => person["home_id"].to_i,
          "street" => person["home_street"],
          "city" => person["home_city"],
          "state" => person["home_state"],
          "zip_code" => person["home_zip_code"],
          "tenants" => []
        }
        homes.push(new_home_shape)
        last_home_id = person["home_id"]
      end
      new_person_shape = {
        "name" => person["name"],
        "age" => person["age"].to_i
      }
      new_home_shape["tenants"] << new_person_shape
    end
    # do stuff
    # else just wanted their name age
  end
  pp homes
end

data_transforms_locations people
