// import React, { Component } from 'react'
// import { Card, Container, Row, Col, CardDeck, Table } from 'react-bootstrap'
// import axios from 'axios'
// import CustomTable from './CustomTable'


// var competition ,date, awayTeam, homeTeam
// export default class football extends Component {
//     state = {
//         response: null
//     }
                    
//     componentDidMount() {
// let obj = this
//         axios({
//             headers: { 'X-Auth-Token': '24cff506e20140d3aea18a56e74c7ec7' },
//             url: 'https://api.football-data.org/v2/matches?api-key=24cff506e20140d3aea18a56e74c7ec7',
//             dataType: 'json',
//             type: 'GET',
//         })
//             .then(function (response) {
//                 obj.setState({response})
//                 var matchesObj = this.state.response == null ? [] : this.state.response.data.matches.map((val) => {
//                     return <CustomTable date={val.date} competition={val.competition} awayTeam={val.awayTeam} homeTeam={val.homeTeam} />
                    
//                                     })
//             })
//     }
//     render() {

        
       
//     return (
//            <div>
//                {this.matchesObj}
//            </div>

//         )
//     }
// }


