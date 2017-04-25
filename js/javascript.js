$(document).ready(function(){
  var sentence = prompt("Type your sentence");
  var new_sentence = function(sentence){
    return sentence.charAt(0).toUpperCase() +
    sentence.charAt(sentence.length-1).toUpperCase();
  };
  function reverse(letter){
    var split_letter = letter.split("");
    var reverseArray = split_letter.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  };
  function join(sentence){
    return sentence.concat(reverse(new_sentence(sentence)));
  };
  function final_sentence(sentence){
    return sentence.charAt((sentence.length-sentence.length%2)/2) + join(sentence);
  };

  function reverse_final(sentence){
    var split_string = sentence.split("")
    var reverseArray = split_string.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  };
  var modifiedSentence = reverse_final(final_sentence(sentence));

  /*alert(reverse(new_sentence(sentence)));
  alert(join(sentence));
  alert(final_sentence(sentence));
  alert(reverse_final(final_sentence(sentence)));*/

  $("#dog").click(function() {
    alert(sentence);
  });

  $("#cat").click(function() {
    alert(reverse_final(final_sentence(sentence)));
  });

  $("button#light").click(function(){
    $("body").removeClass();
    $("body").addClass("light-background");
  });

  $("button#dark").click(function(){
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("button#default").click(function(){
    $("body").removeClass();
    $("body").addClass("default-background");
  });

});
