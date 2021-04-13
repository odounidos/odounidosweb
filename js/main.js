/**
   * Back to top button
   */
(function () {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
       * Easy event listener function
       */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }
    let backtotop = select('.back-to-top')
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 200) {
                backtotop.classList.add('activado')
            } else {
                backtotop.classList.remove('activado')
            }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
    }
})()

/*window.onscroll = () => {
    const nav = document.querySelector('#main-navbar');
    if (this.scrollY <= 10) nav.className = 'navbar navbar-expand-lg navbar-light'; else nav.className = 'navbar navbar-expand-lg navbar-dark bg-dark';
};*/

//Contact Form Modal
$('#staticBackdrop').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('Nuevo Mensaje Para ' + recipient)
    // modal.find('.modal-body input').val(recipient)
})