function chromosomeCheck(sperm) {
  var total = 0
  var cas = sperm.split('')
  for (i=0; i < cas.length; i++){
    if (cas[i] == "Y"){
      total += 1
    }
  }
  if (total > 0){ return "Congratulations! You're going to have a son."}
  else {return "Congratulations! You're going to have a daughter."}
}
