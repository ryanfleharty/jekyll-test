# =============================================
# HAS REPEATS
# =============================================
def hasRepeats? str, n
  # define the pattern
  pattern = str[0...n]
  # check if the rest of the string matches the pattern anywhere else
  p !str[n...str.length].match(pattern).nil?
end

hasRepeats? "this will return true this", 4
hasRepeats? "this will return false", 4

# =============================================
# MAKE CHANGE
# =============================================
def makeChange money_given, coffee_cost
  # find total change
  total_change = (money_given - coffee_cost).round(2)
  p "your total change is $#{total_change}"
  # convert to whole number
  total_whole_change = (total_change * 100).round
  # first find amount of quarters
  quarters = total_whole_change/25
  # change total_whole_change to get rid of the quarters
  total_whole_change = total_whole_change % 25
  # find amount of dimes
  dimes = total_whole_change/10
  # change total_whole_change to get rid of dimes
  total_whole_change = total_whole_change % 10
  # find amount of nickels
  nickels = total_whole_change/5
  # change total_whole_change to get rid of nickels
  total_whole_change = total_whole_change % 5
  # find amount of pennies
  pennies = total_whole_change
  return {
    "quarters" => quarters,
    "dimes" => dimes,
    "nickels" => nickels,
    "pennies" => pennies
  }
end

p makeChange 5.00, 4.42

# =============================================
# ALPHABET SOUP
# =============================================
def sortString str
  # split the string into its letters
  string_array = str.split('')
  # get rid of the whitespace
  string_array.each_with_index { |char, i|
    if char === ' '
      string_array.slice!(i)
    end
  }
  # sort the array
  string_array.sort!
  # join the array
  joined_alphabetized_string = string_array.join
  # return the joined string
  joined_alphabetized_string
end

p sortString "this is a string"

# =============================================
# ANAGRAMS
# =============================================
def isAnagram? first_string, second_string
  # alphabetize the first string
  first_string_sorted = sortString first_string
  # alphabetize the second string
  second_string_sorted = sortString second_string
  # compare the sorted strings, if they're equal then it's an anagram
  if first_string_sorted === second_string_sorted
    return true
  end
  false
end

p isAnagram? "anagram", "nag a ram"
p isAnagram? "this", "that"

# =============================================
# BALANCED BRACKETS
# =============================================
def isBalanced? brackets
  # default variables for checking
  left_brackets = '{[('
  right_brackets = ')]}'
  matched_brackets = {'{' => '}', '(' => ')', '[' => ']'}
  stack = []
  # loop through each character in the bracket string
  brackets.each_char do |current_bracket|
    # if the current character is a left bracket
    if left_brackets.include? current_bracket
      # push the bracket into the empty stack array
      stack.push current_bracket
    # if the current character is a right bracket
    elsif right_brackets.include? current_bracket
      # return false UNLESS the last bracket in the stack array is equal to the current bracket
      return false unless matched_brackets[stack.pop] == current_bracket
    end
  end
  # if it makes it to the end and the stack array is empty, then the bracket string was balanced ; if not empty, then the bracket string was not balanced
  return stack.length > 0 ? false : true
end

p isBalanced? "{()}"
p isBalanced? "[()]{}"
p isBalanced? "[(])"

# =============================================
# CLOCK HAND ANGLE
# =============================================
def clock hour, minute
  # if the input is greater or lesser than the clock's range, return that it's out of range
  if hour > 12 || hour < 0 || minute < 0 || minute > 59
    return 'out of range'
  else # if it's not out of range, calculate the angles
    # calculate angle of hour hand -- note: hour hand moves at a rate of 0.5 degrees per minute
    hour_hand = 0.5 * (60 * hour + minute)
    # calculate angle of minute hand -- note: minute hand moves at a rate of 6 degrees per minute
    minute_hand = 6 * minute
    # calculate the angle between the two hands by subtracting the two angles and taking the absolute value
    angle_between = (hour_hand - minute_hand).abs
    return [angle_between, 360 - angle_between]
  end
end

p clock(6, 00)
p clock(12, 00)
p clock(12, 15)
p clock(9, 45)
p clock(1, 59)
p clock(500, 34)
