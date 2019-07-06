import React from 'react';
import axios from '../../utils/api';

export class Heroes extends React.Component {
    state = {
        heroes: []
    }

    render() {
        return (
            <ul className="img-box">
                {this.state.heroes.map(hero => (
                    <li key={hero.id} className="row align-items-center m-0">
                        <div className="col-1 py-2">
                            <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'} alt={hero.name}
                                 className="img-fluid rounded-circle" style={{width: '100%'}} />
                        </div>
                        <span className="col">{hero.name}</span>
                    </li>
                ))}
            </ul>
        );
    }

    componentDidMount() {
        this.getHeroes();
    }

    async getHeroes(){
        const {data} =  await axios.get('http://ec2-15-164-134-124.ap-northeast-2.compute.amazonaws.com:8000/api/user/heroes');
        console.log(data);
        this.setState({heroes: data.data});
    }
}