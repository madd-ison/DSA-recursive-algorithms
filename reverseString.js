const reverse = function(string) {
    if (string === '') {
      return string
    }
    return reverse(string.substr(1)) + string.charAt(0)
  }
  console.log(reverse('okay'))
 // 'yako'