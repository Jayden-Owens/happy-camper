import { Header, Image, Card, Button, Icon, Segment, Container, List } from 'semantic-ui-react'
import { Component } from 'react'
import { useState, useEffect } from 'react'
import AuthConsumer from '../../providers/AuthProvider'
import axios from 'axios'
import Reservation from './Reservation'

const Reservations = ({user}) => {
  // state = { reservations: [] };

  //   componentDidMount () {
  //     const { user.id } = this.props.location.state
  //     axios.get(`/api/users/${user.id}/reservations`)
  //         .then( res => {
  //           this.setState({ reservations: res.data })
  //         })
  //         .catch( err => console.log(err))
  // }

  const [reservations, setReservations] = useState([])
  
  useEffect ( () => {
    axios.get(`/api/users/${user.id}/reservations`)
      .then( res => {
        setReservations(res.data)
      })
  }, [])

  const renderReservations = () => {
    return reservations.map(reservation => <Reservation key={reservation.id} {...reservation} />)
  }

  return (
    <Container>
    <Header>Reservations</Header>
        { renderReservations()}
    </Container>
  )
}


// const ConnectedReservations = (props) => (
//   <AuthConsumer>
//     { auth =>
//       <Reservations { ...props } { ...auth } />
//     }
//   </AuthConsumer>
// )
export default Reservations