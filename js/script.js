function changeloadingmode(element)
  {
    if(element.className.search('loading') != -1)
      {
        element.className = element.className.replace(' loading', '');
      }
    else
      {
        element.className = element.className+' loading';
      }
  }
