import React, { useState, useEffect } from 'react';

import Header from './Header';
import Main from './Main';

import '../App.css';

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [modifiedCharList, setModifiedCharList] = useState([]);
  const [heading, setHeading] = useState('All');

  useEffect(() => {
    fetch('http://phoenixjaymes.com/assets/data/doctor/get-characters.php')
      .then(reponse => reponse.json())
      .then((responseData) => {
        const jsonData = responseData.data.map(item => (
          { ...item, isInfoShown: false }
        ));

        setCharacterList(jsonData);
        setModifiedCharList(jsonData);
      })
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      });
  }, []);

  const handleNavClick = (navItem) => {
    const pageHeading = navItem.charAt(0).toUpperCase() + navItem.substring(1);
    setHeading(pageHeading);

    if (navItem === 'all') {
      setModifiedCharList(characterList);
    } else if (navItem === 'doctors') {
      const newList = characterList.filter(item => item.role === 'doctors');
      setModifiedCharList(newList);
    } else if (navItem === 'companions') {
      const newList = characterList.filter(item => item.role === 'companions');
      setModifiedCharList(newList);
    } else if (navItem === 'allies') {
      const newList = characterList.filter(item => item.role === 'allies');
      setModifiedCharList(newList);
    } else if (navItem === 'villains') {
      const newList = characterList.filter(item => item.role === 'villains');
      setModifiedCharList(newList);
    }
  };

  const handlePicClick = (role, id, name) => {
    const pageHeading = name.charAt(0).toUpperCase() + name.substring(1);
    setHeading(pageHeading);

    const newList = characterList.filter((item) => {
      // If roles and ids match
      if (role === item.role && id === item.id) {
        return true;
      }

      // Get Doctor companions, allies, and villians
      if (role === 'doctors' && item.doctors !== undefined && item.doctors.includes(id)) {
        return true;
      }

      // Get Companion doctors, allies, and villians
      if (role === 'companions' && item.companions !== undefined && item.companions.includes(id)) {
        return true;
      }

      // Get Ally doctors, companions, and villians
      if (role === 'allies' && item.allies !== undefined && item.allies.includes(id)) {
        return true;
      }

      // Get Villain doctors, allies, and villians
      if (role === 'villains' && item.villains !== undefined && item.villains.includes(id)) {
        return true;
      }

      return false;
    });

    setModifiedCharList(newList);
  };

  const handleInfoClick = (charToChangeObj) => {
    const newList = modifiedCharList.map((char) => {
      // console.log(char.id, char.role);
      if (char.id === charToChangeObj.id && char.role === charToChangeObj.role) {
        return char.isInfoShown ? { ...char, isInfoShown: false } : { ...char, isInfoShown: true };
      }
      return { ...char, isInfoShown: false };
    });

    setModifiedCharList(newList);
  };

  return (
    <div>
      <Header handleNavClick={handleNavClick} />
      <Main
        heading={heading}
        modifiedCharList={modifiedCharList}
        handlePicClick={handlePicClick}
        handleInfoClick={handleInfoClick}
      />
    </div>
  );
}

export default App;
