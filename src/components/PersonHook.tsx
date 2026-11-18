import { useEffect, useState, type JSX } from "react";
import { root } from "../main";

export function PersonHook(): JSX.Element {
  const [name, setName] = useState<string>("Джордан");
  const [surname, setSurname] = useState<string>("Валке");
  const [technology, setTechnology] = useState<string>("React");
  const [date, setDate] = useState<Date>(new Date());

  // Хук useEffect у React потрібен для виконання побічних ефектів (side effects) 
  // у функціональних компонентах.
  // Це все, що не пов'язано напряму з рендером:
  // Запити до сервера
  // Робота з localStorage
  // Підписки на події (addEventListener)
  // Таймери (setInterval, setTimeout)
  // Ручна зміна DOM
  
  useEffect(() => {
    console.log("Виконується після монтування та після рендерингів, у яких змінилося значення technology");
    document.title = `${name} ${surname} - автор ${technology}`;
  }, [technology]);

  // Таймер
  useEffect(() => {
    console.log("Код, який виконується під час монтування компонента.");
    const idTimer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      console.log("Функція очищення (Cleanup Function), яка виконується під час розмонтування компонента.");
      clearInterval(idTimer);
    };
  }, []);

  const unmount = (): void => {
      root.unmount();
      console.log("Компонент видалено");
  };

  console.log("React виконує рендеринг.");
  return (
    <div className="person-card">
      <p>Поточний час: {date.toLocaleTimeString()}</p>

      <h3>Ім'я: {name}</h3>
      <h3>Прізвище: {surname}</h3>
      <h3>Технологія: {technology}</h3>

      <div className="form">
        <label>
          Ім'я:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
          Прізвище:
          <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
        </label>

        <label>
          Технологія / Мова:
          <input
            type="text"
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}
          />
        </label>

        <button onClick={unmount}>Звільнити ресурси</button>
      </div>
    </div>
  );
}