import style from './App.module.css';
import {Header} from "./header/Header";
import {About} from "./about/About";

export const App = () => {
    return (
        <div className={style.appContainer}>
            <Header/>
            <About/>
        </div>
    );
}
