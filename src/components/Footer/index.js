import React from 'react';

function Footer(){
  return (
    
    <footer className="App-footer">
      <hr />
      <h5>Contact </h5>
           <ul className='noBullets'>
                <li><a href="tel:15129142238"><img  src="./assets/img/cell.png" alt="An icon of a telephone" width='42px' /></a></li>
                <li><a href="mailto:terryLThompsonInTx@gmail.com"><img src="./assets/img/email.png" alt="An icon of email" width='42px' /></a></li>
                <li><a href="https://github.com/terrylthompsonintx" ><img src="./assets/img/githubocto.png" alt="An icon of Github" width='42px' /></a></li>
                <li><a href="https://www.linkedin.com/in/terrylthompson/" ><img src="./assets/img/linkb.jpg" width='42px' alt='An icon of LinkedIn'></img></a></li>
            </ul>
      </footer>
  )
}

export default Footer;


