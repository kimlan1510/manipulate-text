$(document).ready(function(){
  // var sentence = prompt("Type your sentence");
  // var new_sentence = function(sentence){
  //   return sentence.charAt(0).toUpperCase() +
  //   sentence.charAt(sentence.length-1).toUpperCase();
  // };
  // function reverse(letter){
  //   var split_letter = letter.split("");
  //   var reverseArray = split_letter.reverse();
  //   var joinArray = reverseArray.join("");
  //   return joinArray;
  // };
  // function join(sentence){
  //   return sentence.concat(reverse(new_sentence(sentence)));
  // };
  // function final_sentence(sentence){
  //   return sentence.charAt((sentence.length-sentence.length%2)/2) + join(sentence);
  // };
  //
  // function reverse_final(sentence){
  //   var split_string = sentence.split("")
  //   var reverseArray = split_string.reverse();
  //   var joinArray = reverseArray.join("");
  //   return joinArray;
  // };
  // var modifiedSentence = reverse_final(final_sentence(sentence));
  /*alert(reverse(new_sentence(sentence)));
  alert(join(sentence));
  alert(final_sentence(sentence));
  alert(reverse_final(final_sentence(sentence)));*/
  //
  // $("#dog").click(function() {
  //   alert(sentence);
  // });
  //
  // $("#cat").click(function() {
  //   alert(reverse_final(final_sentence(sentence)));
  // });

  // $("button#light").click(function(){
  //   $("p").removeClass();
  //   $("p").addClass("light-background");
  // });
  //
  // $("button#dark").click(function(){
  //   $("p").removeClass();
  //   $("p").addClass("dark-background");
  // });
  //
  // $("button#default").click(function(){
  //   $("p").removeClass();
  //   $("p").addClass("default-background");
  // });

  $("button#meow").click(function(){
    $("ul#meowlist").prepend("<li>Mee owwwww</li>");
    $("ul#barklist").prepend("<li>Wooof Woooooof</li>");
    $("#yell").css("display","none");
  });
  $("button#bark").click(function(){
    $("ul#barklist").prepend("<li>Wooof Wooof</li>");
    $("ul#meowlist").prepend("<li>Meeeeooooowwww</li>");
    $("#yell").css("display","none");
  });
  $("#owner").click(function() {
    $("ul#barklist").children("li").remove();
    $("ul#meowlist").children("li").remove();
    $("#yell").toggle();

  })

});
