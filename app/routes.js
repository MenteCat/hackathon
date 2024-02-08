//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Run this code when a form is submitted to 'dance-level-answers'
router.post('/dance-level-answers', function (req, res) {

    // Make a variable and give it the value from 'dance-level'
    var howLongDancing = req.session.data['dance-level']
  
    // Check whether the variable matches a condition
    if ((howLongDancing == "1 to 2 years") || (howLongDancing == "more than 2 years") ){
      // Send user to next page
      res.redirect('/question-two')

    } else {
      // Send user to ineligible page
      res.redirect('/denied')
    }
  
  })

  // Run this code when a form is submitted to 'dance-style-answers'

  router.post('/dance-style-answers', function (req, res) {

    // Make a variable and give it the value from 'dance-style'
    var danceStyle = req.session.data['dance-style']
  
    // Check whether the variable matches a condition
    if (danceStyle == "Freestyle" ){
      // Send user to next page
      res.redirect('/question-three')


    } else {
      // Send user to ineligible page
      res.redirect('/review-page')
    }
  
  })

 
 
