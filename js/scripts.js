let div = document.querySelectorAll ('div');
let links = document.querySelectorAll ('navbar-item nav-link');

window.onscroll = () => 
{
  div.forEach(div => 
  {
    let top = window.scrollY;
    let offset = div.offsetTop - 60;
    let height = div.offsetHeight;
    let id = div.getAttribute ('id');

    if (top >= offset && top < offset + height)
    {
      links.forEach(link =>
      {
        link.classList.remove('active');
        document.querySelector('nav-link a[href*=' + id + ']').classList.add('active');
      })
    }
  });
};