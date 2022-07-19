
import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import './StyleAll.css'


class GameItem extends Component {
    render() {
        var genres = this.props.data.genre.split(',');
        var genrelist = genres.map(function (genre, index) {
            return (
                <Chip key={index} style={{ margin: '5% 0 5% 0' }}><Avatar size={32}>{genres[index][0]}</Avatar>{genre}</Chip>
            );
        }, this);

        return (
            <div className="box">
                


                <Card className='sin' >
                    <CardHeader style={{backgroundColor:'#B0B0B0'}}

                        title={this.props.data.title}
                        subtitle={this.props.data.platform}
                        actAsExpander={false}
                        showExpandableButton={false}
                    />
                    <CardText  >
                       
                           <div className='sin2'>



                              


                            <strong>Rating: {this.props.data.score} / 10</strong>
                            <div >
                                {this.props.data.genre !== '' && genrelist}
                                {this.props.data.editors_choice === 'Y' && <Chip style={{ margin: '5% 0 5% 0' }}><Avatar size={32}>E</Avatar>Editors Choice</Chip>}
                            </div>
                        </div>

                    </CardText>

                </Card >
            </div >
        );
    }
}

export default GameItem;