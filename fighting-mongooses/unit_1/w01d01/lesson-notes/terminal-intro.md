![ga](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

# Introduction to the Terminal

---

Command Line Workthrough<br>
Duration: 1.5 hrs<br>
Adapted by Reuben Ayres from:<br>
"w01d01 Morning Lesson" created by: Thom Page<br>
and "Terminal Basics + Navigating the Filesystem,"<br>

Topics: Terminal, Node<br>

<hr>
<br>


## Software

- Google Chrome
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node](https://nodejs.org/en/download/)

<br>
<hr>

## Lesson Objectives

_After this lesson, students will be able to:_

* Use Terminal to navigate files and folders
* Create files and folders on the command line
* Navigate using relative pathing on the command line 
* Print a "Hello, World" to the console
* Build and open and use a file structure in Visual Studio Code from the command line

<br>
<hr>

## Terminal

&#x1F535; **Open Terminal**

- `⌘ (Command) + Space`, or open Spotlight
- "*Te*rminal"
- `Enter`

- Keep it locked in your dock. Right click on the icon, highlight options, check "Keep in Dock".



&#x1F535; **Terminal Preferences**

You can change the color of your Terminal and the font size. It is recommended to make your Terminal output easier to read, rather than the tiny default output.

> Terminal > Preferences > Profiles

<br>
<hr>


## What is a GUI (pronounced gooey)? Intro (5 mins)

* DOS, Unix, Linux, Commodore 64.

**What is Unix?  Do you guys know about these softwares?**

* Windows, MacOS, iOS, Android OS, etc
* Computers didn't have a **G**raphical **U**ser **I**nterface (GUI). 
* Everyone used a **C**ommand **L**ine **I**nterface (CLI).

![Dos](https://upload.wikimedia.org/wikipedia/commons/9/94/FreeDOS_Beta_9_pre-release5_%28command_line_interface%29_on_Bochs_sshot20040912.png)
*Image from Wikimedia*

* Command line still exists, even though most computer users don't see it.
* Programmers, however, use command line constantly...
	* to manage our files and tell our computer how to run our programs. 
	* to greatly speed up our development process 
	* it help us take ownership of our computer at a deeper level. 
* Pitfalls—pretty serious damage if you don't know what you're doing

## Command Line Interface

* Terminal gives us access to Command Line Interface (CLI) to the operating system. 
* You can give your computer direct, text-based instructions. 
* most powerful piece of software on your computer!
* Think of it as the central hub of your development process. 
* For now, we will use it to navigate the files and folders/directories in our computer.

When terminal launches, it will start in your computer's home directory (whatever you named your computer). Your home directory is denoted by the tilde `~`.

When you're dragging files around in your Finder, you think of folders as folders. 
In **Finder**, we can also navigate our computer's folders and files: folders contain files and more folders. This is appropriate for organizing photos or documents on your computer.

But when we're working with a (UNIX) terminal, you would call them **Directories**—they are  equivalent to **Folders** in a GUI.  And we're going to close our Finder/Explorer windows now, and almost completely stop using them for the rest of the course. 
<br>

#### What is a *shell*?

A shell is simply a type of command line program, which contains a very simple, text-based user interface enabling us to access all of an operating system's services. It is, very simply, a program that accepts text as input and translates that text into the appropriate functions that you want your computer to run.

<br>

## [Bash](https://www.gnu.org/software/bash/) 

Bash is a type of Shell.  It understands commands written in the `bash scripting language`. The commands are abbreviations of English words, or acronyms.

- `pwd` - will print the current working directory. It shows you a `path`. This `path` shows you where are curently located in the filesystem. It's like sending up a flare or homing beacon, where you can see how far you have 'traveled' from the root directory.


- `ls` - Lists the contents of the current directory. You can see
	* the  immediate _child_ directories (the directories inside this directory)
	* the files and directories that are not hidden.

### Flags
- Commands can take **`flags`** denoted by a dash `-`
	- `ls -a` - list content including hidden files and directories. Hidden files and directories begin with a period, for example, `.git`.
	- `ls -l` - list with details

#### Combining flags
	- `ls -la`
	- `ls -lha`


- There are also **double-dash** flags/options on most commands, for example many commands have the `--help` option:
	- `nano --help`


Directories (folders) can have directories within them, and there can be directories inside _those_ directories, ad infinitum. This creates a tree structure where directories can have many children with many different branches.

![](http://i.imgur.com/M6OgKZJ.png)

<br>
<hr>

## Changing Directories

We can navigate to other directories _relative_ to the current working directory.

- `cd some_directory`
	- navigates into a child directory called `some_directory`. `some_directory` is a child of the current directory.
- `cd ..`
	- navigates into the parent of the current directory
	- `..` is shorthand for parent
- `cd` will take you back home

**More Terminal Shortcuts**

- Tab completion
	- autocompletes (case-sensitive) 

- up / down arrow
	- cycle command history


<br>

&#x1F535; **Code Along (2 min)**

* From the home directory, navigate to Library
* Pick a directory and navigate to the end with `cd directoryname`. Remember to autocomplete.
* Then navigate back up with `cd ..`
* Navigate to Library
* Pick a directory and navigate to the end
* Navigate back home with `cd`

<br>
<hr>

## MAKING DIRECTORIES AND FILES

`mkdir` - makes a directory

Example:

- `mkdir directory_name`

	> makes a directory called 'directory_name'`

<br>

`touch` - creates an empty file. A file typically will have a **file extension** like `.txt` whereas a directory will not.


Example:

- `touch file.txt`

	> makes a .txt file

<br>

## Success tip: staying organized throughout the class

* Be obsessive, starting today
* Inside your home folder, create a folder where everything from the class will live, and always put everything from class in there:

`mkdir june-bugs` (the name of our class; if you like you could add a prefix like `sei` or `ga` something like that)<br>
`cd june-bugs`

* In that folder, make a new folder for each day where the name includes the date and topics for the day, and go into it. Suggestion below:

`mkdir 9_10_2018_terminal_loops`<br>
`cd 9_10_2018_terminal_loops`

* In that folder make a new folder for each lesson or lab or homework and give that folder a nice descriptive name, for example:

`mkdir terminal_practice`<br>
`cd terminal_practice`


<br>

&#x1F535; **Code Along (4 min)**

* Navigate to today's folder, and to the terminal_practice folder you just created
* Make a directory `exercise`
* Go into the directory with autocomplete
* Make two directories `example1` and `example3` and list them
* Go into `example1` with autocomplete
* Make two directories on a single line, `example3` and `example4`
* Go into `example3` and make a file `file1.txt`
* List the file
* Navigate back to exercise


---

&#x1F535; **Activity (10 min)**

**Construct a Labyrinth**

Using what you know about navigating directories and creating files and folders, construct a 'labyrinth' in today's folder.

**Precision** is important. There are a few layers to this exercise. Be patient.

- Make sure you are in the correct directory when you go to create another directory or file.
- Make sure you use `touch` to make files, and `mkdir` to make directories. **files** and **directories** are two different things.

* Navigate to today's folder
* `mkdir labyrinth`, <br>`cd labyrinth`
* Make a directory structure like this:

![labyrinth](https://i.imgur.com/V1zaeBT.png)

**parlor** and **stairway** are _child directories_ of the Labyrinth directory.

**sarah_williams.txt** is a _file_ inside the the ballroom directory.

If you make a mistake, don't worry, just keep adding the right stuff to the right place.


<br>
<hr>

## Navigation: RELATIVE PATHS

Chain more directories to the current path with the `/` separator

- Go down the chain into child directories
	- `cd parent_directory`
	- `cd parent_directory/child_directory`
	- `cd parent_directory/child_directory/grandchild_directory`

- Go up the chain into parent directories
	- `cd ..`
	- `cd ../..`
	- `cd ../../..`

- Go sideways into a _sibling_ directory by first going up, then down
	- `cd ../sibling_directory`

- Go into an _aunt_ or _uncle_ directory by first going up to the parent, then the grandparent, then down again on another branch:

	- `cd ../../auntie_directory`

<br>

&#x1F535; **Code along (2 min)**

**Navigate the Labyrinth**

* Navigate to the Labyrinth root directory
* From the Labyrinth root directory, navigate to the `stairway`
* From the `stairway`, navigate to the `parlor`
* From the `parlor`, navigate to the `dining room`
* From the `dining room`, navigate to the `escher room`
* From the `escher room`, navigate to the Labyrinth root

<br>

&#x1F535; **Activity (10 min)**

**Navigate the Labyrinth**

For each of these, write your command on one line, using full paths:

* Navigate to the Labyrinth root directory
* From the Labyrinth root directory, navigate to the `dining_room`
* From the `dining room`, navigate back up the root directory
* From the Labyrinth root directory, navigate to the `stairway`
* From the `stairway`, navigate to the `parlor`
* From the `parlor`, navigate to the `escher_room`
* From the `escher room`, navigate to the `throne_room`
* From the `throne_room`, navigate to the `ball_room`



<br>
<hr>

## (Extra) Navigation: ABSOLUTE PATH

Move anywhere relative to the home directory: 

`cd ~/` - the path starts in home directory

Example:

- `cd ~/Desktop/Labyrinth/stairway/escher_room`

Navigates to the escher room _no matter where_ you are currently located in your filesystem

> NOTE: You can combine absolute and relative pathing when copying or moving files from one location to another with `cp` and `mv`.

#### Jump back (fun trick)

- `cd -` if you cd to a (far-away) absolute path you can go to the previous directory this way

<br>

&#x1F535; **Activity (3 min)**

BUT FIRST:

Are you tired yet of all the tedious typing and going left left left left left to go back and change one letter? well here's some....

#### Handy Terminal Keyboard Shortcuts

In the long term, reduce your reliance on the mouse.

More Bash keyboard shortcuts:

`⌘ K` Clear the Terminal window

`option arrow` (right or left arrow) jump to the beginning of the next (or previous) word

`Ctrl A` Go to beginning of line

`Ctrl E` Go to end of line

`Ctrl K` Kill line to end

`Ctrl U` Kill line to beginning

`Ctrl Y` Yank clipboard to line


`cd -` go to previous directory


...and now back to our

&#x1F535; **Activity: Navigate the Labyrinth (some more)**

Using absolute pathing:

* Navigate to the throne_room
* Navigate to the ballroom
* Navigate to the parlor

<br>
<hr>

# Code

We are going to:

* build a file structure
* open the file structure in Visual Studio Code
* write some code
* run parts of the code

&#x1F535; **Code Along (5 min)**

* In Terminal, navigate to your folder for today.

* Make a directory `file_structure_hello_world` and `cd` into it.

* Create a folder structure:<br>
	`mkdir hello_app`<br>
	`touch index.html`<br>
	`mkdir css`<br>
	`touch css/style.css`<br>
	`mkdir js`<br>
	`touch js/app.js`<br>

* This will be our standard front-end file structure.

* Let's print a message to the console. It is somewhat of a tradition to write a 'Hello World' program as a first step in programming.

* Open the file structure in Visual Studio Code using the Open Folder option

Add to your app.js:<br>
`console.log('Hello World!');`


Open this folder structure in chrome and click on index.html.  Open the developer tools.  You should see:

> => Hello World!

**Congrats!** You've written your first "Hello World"!

You could also run the same Javascript file directly from the terminal using the `node` command.

<br>
<hr>
