document.addEventListener('DOMContentLoaded', function() {
    
    var elem = document.querySelector('.sidenav');
    var instance = new M.Sidenav(elem, {
        edge: 'left',
        draggable: true,
        inDuration: 250,
        outDuration: 200,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        preventScrolling: true
    });

    
});

