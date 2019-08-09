# long_variable_name = 1 #this is a comment
# puts 'hi'
# p 'hi'
# some_var = gets
# puts some_var

# puts "Ruby"
# puts 'Python'
#
# puts "Ruby".size
# puts "Ruby".upcase
# puts 23.to_s
#
# foo = "bar"
#
# puts "oh hai #{foo}"
# puts 'oh hai #{foo}'
#
# long_string = <<-EOF
# asdfasdf
# asdfasdfasd
# asdfasdfdfa
# asdfasdfasdf
# assert_difference "dfa
# asdfasdfasfd
# EOF
#
# puts long_string

# a = false
# b = true
# p a && b
# p a || b
#
# puts 5 / 2
# puts 122
# puts 0x7a
# puts 01272
# puts 0b11101010101
# puts 23_482_235_234
#
# p 5.0 / 2
# p 5.fdiv 2
# p 12.to_f
# p sprintf "%.4f" % (1/3.0)
# p 1.2e-3

# puts 1.2 - 1.0
# require 'bigdecimal'
# puts BigDecimal("1.2") - BigDecimal("1.0")
# puts BigDecimal('0.000000000000000001');
#
# p 2.to_r
# p Rational 0.5
# p 2/3r
# p 2/3r+1
#
# a = nil
# puts a

# light = 'on'
# light = :on
# puts light

# p :name.object_id
# p :name.object_id
#
# p "name".object_id
# p "name".object_id
#
# foo = :bar
# p foo.object_id
# matt = :bar
# foo = :baz
#
# p foo.object_id
# p matt.object_id

# p :name.methods.size
# p "name".methods.size

# a = [1,4,6]
# b = Array(1..6)
# c = Array(1...6)
# p a
# p b
# p c

# domains = {'location' => "United States"}
# domains = { :location => "United States"}
#
# domains = { 'de' => "Germany", 1 => "Slovakia", :us => "United States" }
# p domains
# p domains['de']
# p domains[1]
# p domains[:us]
# require "BigDecimal"
# p true.class, false.class
# p "Ruby".class
# p 1.class
# p 4.5.class
# p 2_234_324_234.class
# p :age.class
# p [1,2,3].class
# p({ :name => 'Jane', :age => 15 }.class)
#
# p '4'.to_i
# p 4.to_s
# p 5.to_f
# p BigDecimal("0.4").to_r
# p "Jane".to_sym

# def h
#     puts 'Hello World!'
# end
# h
# def h(name)
#     puts "Hello #{name}!"
# end
# h("Matt")
# h "Matt"

# a = 0
#
# if a > 1
#     p 'greater than 1'
# elsif a == 1
#     p 'equals 1'
# else
#     p 'less than 1'
# end

# a = 0
# unless a >= 1
#     p "less than 1"
# end

# a = 1;
#
# puts 'equals 1' if a == 1
# puts 'not greater than 1' unless a > 1

# a = 0
# while a < 5 do
#     p a
#     a+=1
# end

# a = 0
# until a == 5 do
#     p a
#     a+=1
# end

# for i in 0...5 do
#     puts i
# end

# const myArray = ['one', 'two', 'three'];
#
# myArray.forEach((str)=>{
#     console.log(str)
# })

# ['one', 'two', 'three'].each do |str|
#     puts 'the value is ' + str
# end
#
# ['one', 'two', 'three'].each { |str| puts 'the value is ' + str }

# const basicArray = [1,2,3];
# const timesTwo = basicArray.map((num)=>{
#     return num * 2;
# })

# times_two = [1,2,3].map do |num|
#     num * 2
# end
#
# p times_two
#
# p [1,2,3].map {|num| num * 2}

# const each = (array, callback)=>{
#     for(let i = 0; i < array.length; i++){
#         callback(array[i]);
#     }
# }
#
# each([1,2,3,4], (currentNum){
#     console.log(currentNum);
# })

# def each(arr, &blk)
#     for elem in arr
#         blk.call(elem)
#     end
# end
#
# each 0...5 do |currentNum|
#     puts currentNum
# end

# log = Proc.new { |el| puts el }
#
# log.call(5)

# const foo = () => {
#     console.log('hi');
# }
#
# const bar = (callback)=>{
#     callback();
# }
# bar(foo);

# foo = Proc.new do
#     puts 'hi'
# end
#
# def bar(callback)
#     callback.call()
# end
#
# bar(foo)

# p [1,2,3,4,5].select {|i| i > 3}
# p [1,2,3,4,5].detect {|i| i > 3}
# p [1,2,3,4,5].reject {|i| i > 3}

# p [1,3,5,10,15].grep(1..5)
# p [0.3,'three',:three, 'thirty-three'].grep /three/
# p [1,3,5,10,15].grep(1..5) {|i| i * 3}

# p ['squirtle', 'mew', 'charmeleon', 'pikachu'].sort
# p ['squirtle', 'mew', 'charmeleon', 'pikachu'].sort_by { |word| word.length }
# p [2,5,1,3].sort
# # p [2, "hello", 1, "what"].sort
# p [2, "hello", 1, "what"].sort_by(&:to_i)
# p [2, "hello", 1, "what"].sort_by(&:to_s)

p ['mew', 'pikachu'].any? { |word| word.length <= 3}
p %w(mew pikachu).all? { |word| word.length <= 3}
p %w(mew cat her the).all? { |word| word.length <= 3}

p (5..10).reduce(:+)
p (1..4).reduce(:*)
p [5,6,7].reduce(5,:+)

p "mew".length == "mew".size

p 18.size
p 2.size
