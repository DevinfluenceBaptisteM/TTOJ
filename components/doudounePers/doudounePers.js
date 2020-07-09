import {useState} from 'react'
import styles from './DoudounePers.module.scss'


function Bonbon({taille, couleur, radius}){
    return (
        <div 
            className={styles.transition}
            style={
                {
                    width: `${taille}px`,
                    height: `${taille}px`,
                    backgroundColor: couleur,
                    borderRadius: `${radius}px`
                }
        }/>
    )
}


export default function DoudounePers() {

    const [taille, setTaille] = useState(100)
    const [couleur, setCouleur] = useState('rgb(201, 110, 110)')
    const [radius, setRadius] = useState(20)
    
    return (
        <div className={styles.container}>
            <div className={styles.candyContainer}>
                <Bonbon 
                    taille={taille} 
                    couleur={couleur} 
                    radius={radius}
                />
            </div>

            <div className={styles.formContainer}>
                <label>
                    Taille
                    <input 
                        type='number' 
                        value={taille}
                        onChange={(e) => setTaille(e.target.value)}
                         />   
                </label>
                
                <label>
                    Couleur
                    <input type='color'
                     value={couleur}
                     onChange={(e) => setCouleur(e.target.value)}
                     />   
                </label>

                <label >
                    Radius 
                    <input type='number'
                    value={radius}
                    onChange={(e) => setRadius(e.target.value)}
                     />   
                </label>
            </div>
        </div>
    )
}