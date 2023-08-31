// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");
// C Sharp - most things are capitalized

// ! Danielle's Notes!!!!

// Variables

string firstName = "Robert";
System.Console.WriteLine(firstName);

System.Console.WriteLine("What is your favorite color?");
string color = Console.ReadLine();
Console.WriteLine("You said your favorite color is " + color);

//Types 

int test1 = 2000000000; //whole number with size of 32bit - ranges from -2,147,483,648 to 2,147,483,647

short test2 = 30000; //whole number, 16bit - ranges from -32,768 to 32,767

long test3 = 945673820542139; // whole number, 64bit, ranges from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807

float test4 = 1.5f; // for decimal numbers, 32 bit (up to 7 digits) HAS TO HAVE THE f AT THE END TO DESIGNATE A FLOAT - JUST PART OF SYNTAX FOR CSHARP

double test5 = 1.5000000d; //Can store 64bit (15-16 digits). Uses the suffix d 

decimal test6 = 1.500000000m; //128bit (28-29 digits). Uses the suffix m

bool test7 = true; // true or false values 

char singleLetter = 'n'; //single letters only, has to be in single quotes

bool isLoggedIn = true;
System.Console.WriteLine(isLoggedIn);

int age = 88;

System.Console.WriteLine(age);

decimal accountBalance = 1.1m;
System.Console.WriteLine(accountBalance);

// ? Notes from Video!!!!

// BOOLEANS - true or false

// bool isDeclared; //declared but not initialized - no default value. Cannot use until value is defined

// isDeclared = true;

// Console.WriteLine(isDeclared);

// bool isDeclaredAndInitialized = false;

// Console.WriteLine(isDeclaredAndInitialized);

// CHARACTERS

// char character = 'a';
// char symbol = '?';
// char number = '1';
// char whitespace = ' ';
// char specialCharacter = '\n'; // backslash n is new line 

// System.Console.WriteLine("hello\nworld"); // shortcut to console write line - cw tab

// NUMBERS

// byte byteExample = 255; //can be anything between 0 and 255
// sbyte sByteMax = -128; // can be -128 to 127 (128 in either direction counting 0)
// short shortExample = 32767; //can be any number up to 32,767
// int intMin = -2147483648; // Same as int32
// Int32 intMax = 2147483647; //same as int
// long longExample = 9,223,372,036,854,775,807; //same as int64
// Int64 longMin = -9223372036854775808; //same as long

// byte numByte = 70;
// System.Console.WriteLine((char) numByte); // on the fly converts number to a character - "casting"
// System.Console.WriteLine((long) 13); //converting one type of number to another - works as long as the data fits
// System.Console.WriteLine((int) 5.6);

//DECIMAL TYPES

// float floatExample = 1.0443534f;
// double doubleExample = 1.73245463456345d;
// decimal decimalExample = 1.24365462165435452156121651651321354324301m;

// System.Console.WriteLine(1.2578907289045789789789789789789f);
// System.Console.WriteLine(1.2578907289045789789789789789789d);
// System.Console.WriteLine(1.2578907289045789789789789789789m);

//STRUCTS

// Int32 age = 42;
// DateTime today = DateTime.Today;
// DateTimeOffset todayUtc = DateTimeOffset.Now;

// DateTime birthday = new DateTime(972, 6, 20);

// System.Console.WriteLine(today);
// System.Console.WriteLine(todayUtc);