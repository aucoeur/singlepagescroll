// --------------------------------------------
// Waypoints

['x', 'a', 'b', 'c', 'd', 'e'].forEach(function (id) {
    if (id === 'x') {
        new Waypoint({
            element: document.getElementById('x'),
            handler: function () {
                selectNav('#a')
            },
        })
    } else {
        new Waypoint({
            element: document.getElementById(id),
            handler: function () {
                selectNav('#' + id)
            },
        })
    }
})


// -------------------------------------------
// Show the selected nav link
// [BROKEN] select onclick down is offset by 1 link

function selectNav(id) {
    const navLinks = document.querySelectorAll('.nav-bar > .line > a')
    navLinks.forEach(function (link) {
        if (link.getAttribute('href') === id) {
            link.classList.add('selected')
        } 
        else {
            link.classList.remove('selected')
        }
    })
}

// -------------------------------------------
// Scroll to Smooth

// Get a reference to the body
const body = document.querySelector('body')
// Listen for clicks
body.addEventListener('click', function (e) {
    console.log(e.target)

    // If a link has external class ignore it
    if (e.target.matches('.external')) {
        return
    }

    // Prevent the default behavior
    e.preventDefault()

    // Prepare to scroll
    // Get the href from the target
    const href = e.target.closest('a').href
    if (href) {
        // Select the current link
        selectNav(href)
        // Scroll to the id that matches the href
        const id = href.split('#')[1]
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
    }
})