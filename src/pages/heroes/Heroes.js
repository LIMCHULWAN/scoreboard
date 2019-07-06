import React from 'react';
import axios from '../../utils/api';

export class Heroes extends React.Component {
    state = {
        heroes: []
    }

    render() {
        return (
            <div className="row">
                {this.state.heroes.map(hero => (
                    <div className="col-6 col-sm-4 col-md-3 p-1 p-sm-2 p-md-3" key={hero.hero_id}>
                        <div className="card">
                            <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'}
                                 style={{width: '100%'}} alt={hero.name}></img>
                            <div className="card-body">
                                <h5 className="card-title">{hero.name}</h5>
                                <p className="card-text">email: {hero.email}</p>
                                <p className="card-text">sex: {hero.sex}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
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