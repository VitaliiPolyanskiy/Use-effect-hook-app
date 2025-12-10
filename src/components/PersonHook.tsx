import { useEffect, useState, type JSX } from "react";
import { root } from "../main";

export function PersonHook(): JSX.Element {
  const [name, setName] = useState<string>("Джордан");
  const [surname, setSurname] = useState<string>("Валке");
  const [technology, setTechnology] = useState<string>("React");
  const [date, setDate] = useState<Date>(new Date());

  // Хук useEffect в React нужен для выполнения побочных эффектов (side effects) 
  // в функциональных компонентах.
  // Это всё, что не связано напрямую с рендером:
  // Запросы к серверу
  // Работа с localStorage
  // Подписки на события (addEventListener)
  // Таймеры (setInterval, setTimeout)
  // Ручное изменение DOM
  
  useEffect(() => {
    document.title = `${name} ${surname} - автор ${technology}`;
  }, [technology]);

  // Таймер
  useEffect(() => {
    const idTimer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(idTimer);
    };
  }, []);

  const unmount = (): void => {
      root.unmount();
      const elemDOM = document.getElementById("root");
      if(elemDOM)
        elemDOM.innerHTML = "<h2>Компонент удалён</h2>";
  };

  return (
    <div className="person-card">
      <p>Текущее время: {date.toLocaleTimeString()}</p>

      <h3>Имя: {name}</h3>
      <h3>Фамилия: {surname}</h3>
      <h3>Технология: {technology}</h3>

      <div className="form">
        <label>
          Имя:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
          Фамилия:
          <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
        </label>

        <label>
          Технология / Язык:
          <input
            type="text"
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}
          />
        </label>

        <button onClick={unmount}>Освободить ресурсы</button>
      </div>
    </div>
  );
}
