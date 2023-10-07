var modelMobilObject = {
    "AVANZA": {
      "20-40 jt": [],
      "41-60 jt": [],
      "Diatas 60 jt": [],
      "Cash": []      
    },
    "VELOZ": {
      "30-50 jt": [],
      "51-70 jt": [],
      "Diatas 70 jt": [],
      "Cash": []
    },
    "RUSH": {
        "30-60 jt": [],
        "61-70 jt": [],
        "Diatas 70 jt": [],
        "Cash": []      
    },
    "RAIZE": {
        "25-53 jt": [],
        "54-65 jt": [],
        "Diatas 65 jt": [],
        "Cash": []
    },
    "AGYA": {
        "17-40 jt": [],
        "41-60 jt": [],
        "Diatas 60 jt": [],
        "Cash": []
    },
    "CALYA": {
        "17-40 jt": [],
        "41-60 jt": [],
        "Diatas 60 jt": [],
        "Cash": []      
    },
    "INNOVA": {
        "78-90jt": [],
        "91-120jt": [],
        "Diatas 120jt": [],
        "Cash": []
    }
  }
  window.onload = function() {
    var modelMobilSel = document.getElementById("model-mobil");
    var estimasiDPSel = document.getElementById("estimasi-dp");
    for (var x in modelMobilObject) {
      modelMobilSel.options[modelMobilSel.options.length] = new Option(x, x);
    }
    modelMobilSel.onchange = function() {
      estimasiDPSel.length = 1;
      for (var y in modelMobilObject[this.value]) {
        estimasiDPSel.options[estimasiDPSel.options.length] = new Option(y, y);
      }
    }
  }