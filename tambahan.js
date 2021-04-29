function changeAgama() {
    const AGAMA = document.getElementById('agama');
    
    
    if(agama.value !== '') {
      submit.disabled = false
    } else {
      submit.enabled = true
    }
  }