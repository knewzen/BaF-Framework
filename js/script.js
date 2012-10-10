/*
 *
 * Buttons and Forms
 *
 * Repo: https://github.com/SimonWaldherr/buttons-and-forms
 * Demo: http://simonwaldherr.github.com/buttons-and-forms/demo/
 * Editor: http://simonwaldherr.github.com/buttons-and-forms/editor/
 * License: MIT
 * Version: 1.5
 *
 */

function $id(id)
  {
    return document.getElementById(id);
  }

var keepCalling = true;

function plusone(id, wait)
  {
    if((keepCalling)&&((Math.round($id(id).max)) > $id(id).value))
      {
        $id(id).value++;
        if(wait > 60)
          {
            wait = wait-60;
          }
        if(wait < 60)
          {
            wait = 60;
          }
        window.setTimeout(plusone, wait, id, wait);
      }
  }

function minusone(id, wait)
  {
    if((keepCalling)&&($id(id).value > (Math.round($id(id).min))))
      {
        if(wait > 60)
          {
            wait = wait-60;
          }
        if(wait < 60)
          {
            wait = 60;
          }
        $id(id).value--;
        window.setTimeout(minusone, wait, id, wait);
      }
  }

function changeValues(element)
  {
    
    if(element != '[object HTMLInputElement]')
      {
        element = $id(element);
      }
    var kc = window.event.keyCode;
    if (((kc === 37)||(kc === 40)||(kc === 109))&&(element.value > (Math.round(element.min))))
      {
        //left||down||minus -
        element.value = Math.round(element.value)-1;
        return false;
      }
    else if (((kc === 38)||(kc === 39)||(kc === 107))&&((Math.round(element.max)) > element.value))
      {
        //up||right||plus +
        element.value = Math.round(element.value)+1;
        return false;
      }
    else if ((kc === 34)&&(element.value > (Math.round(element.min))))
      {
        //page down -
        element.value = Math.round(element.value)-10;
        return false;
      }
    else if ((kc === 33)&&((Math.round(element.max)) > element.value))
      {
        //page up +
        element.value = Math.round(element.value)+10;
        return false;
      }
    else
      {
        return true;
      }
  }

function changeloadingmode(element)
  {
    if(element.disabled == true)
      {
        
      }
    else
      {
        if(element.className.search('loading') != -1)
          {
            element.className = element.className.replace(' loading', '');
          }
        else
          {
            element.className = element.className+' loading';
            return true;
          }
      }
  }

$(".toggle-buttons > .baf").click(function() {
    $(this).siblings(".baf").removeClass("checked");
    $(this).addClass("checked");
});
