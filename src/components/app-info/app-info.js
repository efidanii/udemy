import "./app-info.css";

const AppInfo = (props) => {
    const {numberOfEmpolers, nubmerOfIncreasedEmpolers} = props

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {numberOfEmpolers-1}</h2>
            <h2>Премию получат: {nubmerOfIncreasedEmpolers}</h2>
        </div>
    )
}

export default AppInfo;