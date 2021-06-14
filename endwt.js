// TEST WHETHER A STRING ENDS WITH SCRIPT
let word = prompt('Enter word. (Length of word must be greater or equal to 6)');
if ((word.slice((word.length-6), word.length) == 'Script') && (word.length > 6)){
    alert('Word ends with "Script');
} else{
    alert('Error')
}

