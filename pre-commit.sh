#!/bin/bash

RED='\033[0;31m'
NC='\033[0m' # No Color

status=0

function regex_test() {
	pattern="$1"
	git diff-index --cached --name-only HEAD > 'temporaryInput.list'
	while IFS= read -r line
	do
		FILE="$line"
		if [[ $(grep -E $pattern $FILE) ]]; then
	    	echo -e "${RED}Errors${NC} found in $FILE: Contains occurences of $pattern"
            status=1
		fi
	done < "temporaryInput.list"
    rm temporaryInput.list
}

git stash --quiet --keep-index
regex_test "hack"
RESULT=$?
git stash pop -q 
[ $RESULT -ne 0 ] && exit 1
exit ${status}
