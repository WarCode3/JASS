<p align='center'>
  <b>JASS</b>
</p>
<p align='center'>
  Ice Sickle language support for JASS, including grammar, pretty print, and validation<br/><br/>
</p>
  
<hr/>

<p align='center'>
  <a href="#why"><strong>Why?</strong></a> &middot;
  <a href="#language-overview"><strong>Language Overview</strong></a> &middot;
  <a href="#contributing"><strong>Contributing</strong></a>
</p>

<hr/>

# Why?
This module provides code support for JASS to be used in Ice Sickle. It's main code is the Antlr4 grammar definition. Since JASS is the native scripting language for WarCraft III, no transpilation is needed, so code remains untouched by the transpiler method.

# Language Overview
JASS (Just Another Scripting Syntax) is a very simple scripting language by Blizzard Entertainment. This is not meant to be a guide to JASS coding, but rather just a quick glimpse of the core of the language.

*Functions*
```
function MyFunction takes unit u, region r returns boolean
  ... (statements)
  return false
endfunction

call MyFunction(...)
```

*Local variables*
```
local unit u = null
set u = ...
```

*Globals*
```
globals
  trigger t = null
  region gg_my_region = ...
endglobals
```

*Logical conditions*
```
if life == 55 then
  call Hello(7, 22)
elseif not udg_True then
  call ok(myVar, 4, "hello")
elseif (true or true) and false then
  call Strange("helloWorld", 54, false)
elseif udg_IsTriggerEnabled then
  call ThisIsTrue(true)
else
  call Yay()
endif
```

*Loops*
```
// This is the only type of loop in JASS
// There are no "for" or "while" loops
loop
  set i = i - 1
  call SetPlayerAbilityAvailable(Player(i), udg_SpellDamageAbility, false)
  exitwhen i == 0
endloop
```

# Contributing
As with all WC3-Nova projects, we love contributions!

**Bugs**  
Please [submit an issue](https://github.com/WC3-Nova/JASS/issues) with a detailed report on how to reproduce the issue.

**Improvements**  
Fork the project, make your edits, and then submit a pull request. We'll take a look!
