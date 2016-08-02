        var delay;
      // Initialize CodeMirror editor with a nice html5 canvas
      var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
        mode: 'text/html',
        viewportMargin: Infinity,
        tabMode: 'indent',
        lineNumbers: true,
        autoCloseTags: true,
        lineWrapping: true,
        extraKeys: {"Ctrl-Space": "autocomplete"}
      });
      editor.on("change", function() {
        clearTimeout(delay);
        delay = setTimeout(updatePreview, 300);
      });
      
      function updatePreview() {
        var previewFrame = document.getElementById('preview');
        var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
        preview.open();
        preview.write(editor.getValue());
        preview.close();
      }
      setTimeout(updatePreview, 300);
    
      CodeMirror.commands.autocomplete = function(cm) {
        CodeMirror.showHint(cm, CodeMirror.htmlHint);
        CodeMirror.showHint(cm, CodeMirror.javascriptHint);
      }
        
      var input = document.getElementById("select");
      function selectTheme() {
        var theme = input.options[input.selectedIndex].innerHTML;
        editor.setOption("theme", theme);
        
//        var newBG = input.value;
//        document.bgColor = newBG;

      }
      var choice = document.location.search &&
                   decodeURIComponent(document.location.search.slice(1));
      if (choice) {
        input.value = choice;
        editor.setOption("theme", choice);
      }