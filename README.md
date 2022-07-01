# GoodCompanyCalc
I didn't want to jump through all the hoops in creating a Google Addon for the spreadsheet im sharing. So I decided I put the code here.

[Spreadsheet Link](https://docs.google.com/spreadsheets/d/1uCq542Z3T8DgBcRoTFoktYhB4ak_O2VH-f2v-CxDpcM/edit?usp=sharing) so you can make a copy for yourself.



## Installation

Make a copy of the spreadsheet and then go to 'Extensions' -> 'Apps Scripts'.
My scripts should have been copied as well, so no need to do anything else here.
If not, just copy the two files from this Repo into AppsScripts.
The first time you're using one of the buttons Google will ask for permissions. Grant them and you're done.

## Usage

In order to use the calculator for lookup of default recipes you just need to pick a module from the dropw-down.
I'm always picking the fastest crafting, which is usually the machine one. For cases in which you don't want to use a machine for that module just set the table tick box.
So there is currently no option to get Tinker Table times or similar low level tables.
If there is great interest in such a feature, I might implement it. So shoot me a message in the GoodCompany Discord server (@Evaniar) if your're interested in this.


If you additionally want to plan your production lines including your products, you first need to add their recipes as well as their crafting times.
This is done on the 'Input' sheet by defining you product by name, its modules and their quantities and then hit the 'add item' button.
After that you need to specify its crafting time: for that you set up an assembly table ingame to get the assembly time. With this info you can now fill out the table on the right side and add that to the table with the 'add crafting' button.
With those steps completed your product can now be chosen just as any default recipe. 

The 'clear custom content' button does exactly that. It's mainly for new users that copy my spreadsheet, so they aren't burdened with my product recipes.
Alternatively you could use it, if you want a clean slate for a new playthrough.

## Restrictions
When choosing a module it only shows its recipe in that line, the required modules aren't added automatically as their own rows. This is intentional as I try to use the same modules for multiple products to produce these modules centralized and distribute them then to their respective product assembly tables.

Right now I'm checking items until row 199 and craftings until row 500, if you need more rows just alter the ranges 'RANGE_items' and 'RANGE_crafting' accordingly.

