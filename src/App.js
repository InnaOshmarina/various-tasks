import React, { useContext, useEffect, useState } from 'react';

import { BackgroundContext, ThemeContext } from './app-context';
import Child from './Child';
import Item from './Item';

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const handleWidth = setWidth(window.innerWidth);
    window.addEventListener('resize', handleWidth);
    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  });
  return width;
};

const useDocumentTitle = title => {
  useEffect(() => {
    document.title = title;
  });
};

const useFetchingUser = flag => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('https://api.randomuser.me/');
      const data = await response.json();
      const item = data.results[0];
      setUser(item);
    };
    fetchUser();
  }, [flag]);

  return user;
};

const App = () => {
  const theme = useContext(ThemeContext);
  const background = useContext(BackgroundContext);
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('test value');
  const [name, setName] = useState('Бумеранг не запущен.');
  const updateData = data => setName(data);
  const width = useWindowWidth();
  useDocumentTitle(value);
  const user = useFetchingUser(count);

  const clickOnButton = () => setCount(count + 1);
  const handleChangeValue = e => setValue(e.target.value);

  return (
    <>
      <div className={`card ${background}`}>
        <Item label="Theme">
          <h4>{theme}</h4>
        </Item>

        <Item label={`Counter value is ${count}`}>
          <button type="button" onClick={clickOnButton}>
            Click me!
          </button>
        </Item>

        <Item label={value}>
          <input value={value} onChange={handleChangeValue} />
        </Item>

        <Item label="Browser window width is">
          <h4>{width}</h4>
        </Item>

        <Item label="Fetched random user">
          <div>{user ? `${user.name.first} ${user.name.last}` : ''}</div>
        </Item>
      </div>
      <div className="boomerang">
        <p>State: {name}</p>
        <Child updateData={updateData} />
      </div>
    </>
  );
};

// передача пропс от ребенка к родителю: from Child to App

export default App;
