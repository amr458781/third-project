const buttons = document.querySelectorAll('.myBtn');
let text = document.querySelector('.form-n1');


buttons.forEach(function(btn) {
    const tooltip = new bootstrap.Tooltip(btn, { trigger: 'hover' });
    const popover = new bootstrap.Popover(btn, { trigger: 'manual' });
    btn.onclick = function () {
      tooltip.disable();
      popover.show();
      setTimeout(function () {
        popover.hide();
        tooltip.enable();
      }, 3000);
      alert(text.value +  " تم النسخ بنجاح ");
    }
    
  });



