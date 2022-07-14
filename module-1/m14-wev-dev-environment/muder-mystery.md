---
course: virgil-fw
author: Tuan Hoang
description: solutions for full stack web assignments
---


# Murder Mystery
Init: Open file README.md
Open your terminal

 
#### 00 
1. `cd desktop/cmystery`
2. `cat step0`

3. `Cmd +N`: Open a new terminal to navigate around and testing new commandlines. 

By the time, there are two opened Terminal, one for reading instructions one for testing commandlines and navigate files.

![](https://i.imgur.com/jPQwZr5.png)


Check up folder `Detective Handbook`
Check up folder `mystery`


#### 01

------
From: clmystery/
------

1. `cat step1`
2. `less mystery/crimescene` : to view content in different viewer.
3. `q` : exit viewer

4. `touch clues.txt`

5. `grep CLUE mystery/crimescene > clues.txt`

**CLUES:**
*CLUE: Footage from an ATM security camera is blurry but shows that the perpetrator is a tall male, at least 6'.
CLUE: Found a wallet believed to belong to the killer: no ID, just loose change, and membership cards for AAA, Delta SkyMiles, the local library, and the Museum of Bash History. The cards are totally untraceable and have no name, for some reason.
CLUE: Questioned the barista at the local coffee shop. He said a woman left right before they heard the shots. The name on her latte was Annabel, she had blond spiky hair and a New Zealand accent.*

6. `git add .``
7. `git commit -m "Upload clues"``
8. `git push` 

#### 02


1. `cat step2`
2. `touch possible_witnesses.txt`
3. `grep Annabel mystery/people > possible_witnesses.js`

4. `git add .``
5. `git commit -m "Upload  witnessses"`
6. `git push`

#### 03

**CLUES:**
*Annabel Sun     F       26      Hart Place, line 40
Oluwasegun Annabel      M       37      Mattapan Street, line 173
Annabel Church  F       38      Buckingham Place, line 179*


1. `cat step3`
2. `ls mystery/streets/Buckingham_*`
3. `less mystery/streets/Buckingham_Place`
4. `q`
5. `ls mystery/streets/Hart_*`
6. `less mystery/streets/Hart_Place`
7. `q`

#### 04


1. `cat step4`
2. `touch interview.txt`
3. `head -179 mystery/streets/Buckingham_Place | head -40 mystery/streets/Hart_Place > interview.txt `

4. `less interview.txt`
5. `q`

**CLUES:**
*SEE INTERVIEW #699607
SEE INTERVIEW #47246024*

6. `git add .`
7. `git commit -m "Upload interview files"`
8. `git push `

#### 05

1. `git checkout step-5`
2. `cat step5`

3. `at mystery/interviews/interview-47246024 | cat mystery/interviews/interview-699607 > interview.txt > interview_info.txt`

4. `git add .` 
5. `git commit -m "Create interview_info.txt"`

6. `git checkout main`
7. `git merge step-5 -m "Merge step5"`

#### 06

**CLUES:**
*Describes it as a blue Honda, with a license plate that starts with "L337" and ends with "9". Tall Male 6'*

1. `cat step6`

2. `grep -i "L337.*9" -A6 mystery/vehicles | grep -i Honda -B2 -A5 | grep -i Blue -B3 -A4 | grep -i "6'" -B5 -A2 > suspects.txt`
3. `git add .` 
4. `git commit -m "Create interview_info.txt"`
5. `git push`

#### 07

1. `cat step7`
2. `rm possible_witnesses.txt`
3. `rm interview.txt`
4. `rm interview_info.txt`
5. `git status` : to see files log

#### 08

1. `cat step8`

2. `cat mystery/memberships/AAA mystery/memberships/Delta_SkyMiles mystery/memberships/Terminal_City_Library mystery/memberships/Museum_of_Bash_History | grep -c "Joe Germuska"`

==> 2 : Joe Germuska only appears in two files.

3. `cat mystery/memberships/AAA mystery/memberships/Delta_SkyMiles mystery/memberships/Terminal_City_Library mystery/memberships/Museum_of_Bash_History | grep -c "Jeremy Bowers"`

==> 4 : Jeremy appears in all 4 files - is the murderer

4. `echo "Jeremy Bowers" | $(command -v md5 || command -v md5sum) | grep -qif /dev/stdin encoded && echo CORRECT\! GREAT WORK, GUMSHOE. || echo SORRY, TRY AGAIN.`

==> CORRECT MESSAGE check.

### 09

1. `cat step9`
2. Creat file text and write in it: `vim jail.txt`
3. `i`
4. `Jeremy Bowers`
5. ESC
6. `:wq`
7. `git add . `
8. `git commit -m "send to jail"`
9. `git push`

