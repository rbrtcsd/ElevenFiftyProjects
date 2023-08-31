// VALUE TYPES 
// Have a specific size, and stored in stack

// REFERENCE TYPES
// Have a variable size, stored in heap memory

//  Strings

string someString;

string initialized = "this is initialized";


string firstName = "Andrew";
string lastName = "Torr";

string fullName = firstName + ' ' + lastName;

Console.WriteLine(fullName);

string interpolatedFullName = $"{firstName} {lastName}";
System.Console.WriteLine(interpolatedFullName);

//COLLECTIONS

char firstLetter = firstName[0];
System.Console.WriteLine(firstLetter);

string[] stringArray = { "Hellow", "World", "why", "is it", "always", "hello world??" };

System.Console.WriteLine(stringArray[2]);

// LISTS

List<string> listOfStrings = new List<string>();
listOfStrings.Add("hello");
listOfStrings.Add("world");
listOfStrings.Remove("hello");
// listofStrings.RemoveAll();
System.Console.WriteLine(listOfStrings[0]);

List<int> listOfInts;

Queue<string> firstInFirstOut = new Queue<string>();

firstInFirstOut.Enqueue("I'm first!");
firstInFirstOut.Enqueue("I'm next!");
System.Console.WriteLine(firstInFirstOut.Dequeue()); //removes the first up item from the list - first in first out 
System.Console.WriteLine(firstInFirstOut.Peek()); // lets us look at the first up item in the list without removing it 

// DICTIONARIES

Dictionary<int, string> keyAndValue = new Dictionary<int, string>();
keyAndValue.Add(21, "legal drinking age"); //two keys can point to the same value, but cannot duplicate keys
keyAndValue.Add(18, "legal voting age");

System.Console.WriteLine(keyAndValue[21]);

Dictionary<string, string> stringDictionary = new Dictionary<string, string>();
stringDictionary.Add("triangle", "the set of all points in a plane definted by the area within the boundary defined by the three points");

System.Console.WriteLine(stringDictionary["triangle"]);

//OTHER COLLECTIONS

SortedList<int, string> sortedKeyAndValue = new SortedList<int, string>();
HashSet<int> uniqueList = new HashSet<int>();
Stack<string> lastInFirstOut = new Stack<string>();