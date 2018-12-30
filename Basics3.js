//Print the size of the array.
var b=["hello","world","4","goodbye"];

console.log(b.length+" is the size of the array");
//Print the elements of the array
for(var i=0;i<4;i++)
	{
	console.log(b[i]);
	}

//Change the position the array elements and print them.
var c= new Array();
//Set to the new array positions.
c[0]="goodbye";
c[1]="4";
c[2]="world";
c[3]="hello";
c[4]="bad";

console.log(c.length+" is the size the new array");

//Print current array
console.log("Print the current array with 5 positions properly included:");
for(var i=0;i<c.length;i++)
	{
	console.log(c[i]);
	}

//Print array numbers in reverse.
console.log("Print the array C in reverse positions:")
for(var j=c.length-1;j>=0;j--)
	{
	console.log(c[j]);
	}
