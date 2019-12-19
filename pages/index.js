import {Box, Avatar, Text, Divider, IconButton, Column, Button, Spinner} from "gestalt";
import {TiHomeOutline, TiChartAreaOutline, TiCalendarOutline, TiTags, TiShoppingCart} from "react-icons/ti";
import io from 'socket.io-client';
import {PullToRefresh} from 'react-js-pull-to-refresh';
import Home from '../components/home';
import Ranking from '../components/ranking';
import Event from '../components/event';
import Mission from '../components/mission';
import Shopping from '../components/shopping';
import Profile from '../components/profile';
import Info from '../components/info';
import Login from '../components/login';
import Game from '../components/game';
import Register from '../components/register';
import Question from '../components/question';
import Result from '../components/result';
import Forgot from '../components/forgot';
import 'gestalt/dist/gestalt.css';
import './index.css';

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.refresh = this.refresh.bind(this)
    this.state = {
      socket: io('https://savacloud.herokuapp.com', {
        path: "/gameonl",
        origins: "*:*",
        transports: ['websocket', 'pooling']
      }),
      page: "main",
      route: "home",
      ////////////////
      id: "",
      ads : [],
      data: [],
      name: "",
      family: "Book Family",
      rank: "",
      score: 0,
      avatar: "",
      cover: "",
      allPackages: [],
      familyPackages: [],
      childrenPackages: [],
      competitionPackages: [],
      entertainmentPackages: [],
      events: [],
      mission: [],
      buy: {"1": true},
      show: true,
      questions: [],
      loadQuestions: true,
      ////////////////
      choosePackage: null,
      room: "",
      roomPartner: [],
      answers: {},
      partnerInfo: null
    }
  }

  changeRoom(value) {
    if(value.length === 5) this.state.socket.emit('join', value);
    this.setState({room: value})
  }

  resetResult() {
    this.setState({answers: {}})
  }

  componentDidMount() {
    this.state.socket.on('connect', () => {
      this.state.socket.on('connectToRoom', data=> {
          this.setState({
            room: data.room,
            roomPartner: data.roomPartner
          })
          data.roomPartner.map(member => {
            if(member.id !== this.state.id) this.setState({partnerInfo: member})
          })
      })
      this.state.socket.on('entergame', (questions) => { 
        this.setState({page: "question", questions: questions, loadQuestions: true})
      })
      this.state.socket.on('answerReceived', (answer) => {
          this.setState(prevState => {
            let newAnswer = prevState.answers;
            if(!newAnswer[answer.id]) newAnswer[answer.id] = [];
            newAnswer[answer.id][answer.questionIndex] = { answer: answer.answer, time: answer.time }
            return {
              answers: newAnswer

            }
          })
      })
    });
    this.verify()
  }

  buyPackage(index) {
    this.setState(prevState => { 
      prevState.buy["" + index + ""] = true; 
      fetch(`https://savacloud.herokuapp.com/buy`, {
        method: "POST", 
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({buy: this.state.buy})
      })
      localStorage.setItem('buy', JSON.stringify(prevState.buy))
      return { buy: prevState.buy }
    })
  }

  choosePackage(index) {
    this.setState({choosePackage: index})
  }

  loadQuestions() {
    fetch(`https://script.google.com/macros/s/AKfycbwpNF-w_pvlbmMegVZzhi8iWYmvdSOgdabp7iA6sqXoiTWKxQzF/exec?data=${JSON.stringify(this.state.allPackages[this.state.choosePackage])}`, {
      method: "GET",
    })
      .then(result => 
          result.json()
      )
      .then(result => {
          this.setState({questions : result.result, loadQuestions: false});
      })
  }

  verify() {
    let token = localStorage.getItem('token');
      if(token) {
        fetch('https://savacloud.herokuapp.com/verify', {
            method: "GET",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
        .then(result => {
            if (result.status === 200) return result.json()
            else throw Error("lỗi đăng nhập")
        })
        .then(result => {
            
            if (result.error) throw Error("lỗi token")
            this.fetchData()
        })
        .catch(e => {
            
            localStorage.removeItem('token')
            this.setState({page: 'login'})
        })
      } else this.setState({page: 'login'})
  }

  fetchData() {
    let decode = atob(window.localStorage.getItem('token').split('.')[1]);
    let info = JSON.parse(decode);
    console.log(info)
    this.setState({
      id: info.userId,
      data: [{
          label: "Khả năng",
          backgroundColor: "rgb(145, 229, 246, 0.5)",
          borderColor: 'rgb(54, 162, 235)',
          data: [info.info.math, info.info.physic, info.info.chemistry, info.info.literature, info.info.history, info.info.geography, info.info.skill, info.info.linked],
          fill: 'origin'
      }],
      name: decodeURIComponent(escape(info.info.name)),
      family: "Book Family",
      rank: "",
      score: info.info.scores,
      avatar: info.info.avatar,
      cover: info.info.cover,
      buy: {...this.state.buy, ...info.info.buy, ...JSON.parse(localStorage.getItem('buy'))},
      family: info.info.family ? info.info.family : "Book Family" 
    })

    this.state.socket.emit('username', {name: decodeURIComponent(escape(info.info.name)), avatar: info.info.avatar, id: info.userId});

    Promise.all([
      fetch('https://script.google.com/macros/s/AKfycbxXAz_BiTl-g4fVcN_5_HwouklaD1XMrF1CXMYWO4dp0VgHi10/exec')
          .then(result => 
              result.json()
          )
          .then(result => {
              this.setState({ads : result.result});
          }),
      fetch('https://script.google.com/macros/s/AKfycbxhPOYd6asdd_w9c6iB3CCdzsg4VYzFh7qKgZiNi-IKlcOo665O/exec')
          .then(result =>
              result.json()
          )
          .then(result => {
              this.setState({events : result.result});
          }),
      fetch('https://script.google.com/macros/s/AKfycbwgXrL-ZO5fryEonD6VWLJhsaxZg2VtaH-A9rLIoNZLLkQWTfM/exec')
          .then(result => 
              result.json()
          )
          .then(result => {
              this.setState({allPackages : result.result, familyPackages:[], childrenPackages: [], competitionPackages: [], entertainmentPackages: []});
              result.result.map((ele, index) => {
                  switch(ele.packageType) {
                      case 'FAMILY': this.setState({familyPackages : [...this.state.familyPackages, index]}); break;
                      case 'CHILDREN': this.setState({childrenPackages : [...this.state.childrenPackages, index]}); break;
                      case 'COMPETITION': this.setState({competitionPackages : [...this.state.competitionPackages,index]}); break;
                      case 'ENTERTAINMENT': this.setState({entertainmentPackages : [...this.state.entertainmentPackages, index]}); break;
                  }
              })
          })
    ]).then (result => {
      this.setState({show: false}) 
    })
  }

  changeRoute(route) {
    this.setState({
      route: route
    })
  }

  changePage(route) {
    console.log(route)
    this.setState({
      page: route,
      route: 'home'
    })
    if(route === "main") this.verify()
  }

  async refresh() {
    await this.setState({
      show: true
    })
    return await this.verify()
  }

  render() {
    if(this.state.page === 'login') return (<Login changeRoute={route => this.changePage(route)} {...this.state}/>)
    else if(this.state.page === 'game') return (<Game changeRoute={route => this.changePage(route)} {...this.state} changeRoom={value => this.changeRoom(value)}/>)
    else if(this.state.page === 'register') return (<Register changeRoute={route => this.changePage(route)} {...this.state}/>)
    else if(this.state.page === 'fogot') return (<Forgot changeRoute={route => this.changePage(route)} {...this.state}/>)
    else if(this.state.page === 'question') return (<Question changeRoute={route => this.changePage(route)} {...this.state}/>)
    else if(this.state.page === 'result') return (<Result changeRoute={route => this.changePage(route)} {...this.state} resetAnswer={() => this.resetResult()}/>)
    else return(
      <PullToRefresh onRefresh={this.refresh} pullDownThreshold={200}>
      <Box height="100vh" width="100%">
       
          {
            (this.state.route === "info") ?
          <Box
            alignItems="center"
            direction="row"
            display="flex"
            width="100%"
            height="4rem"
            paddingY={2}
            color="white"
          > 
            <Column span={3}>
              <Box paddingX={2} >
                <IconButton icon="arrow-back" onClick={e => {this.changeRoute('home')}} accessibilityLabel="back"/>
              </Box>
            </Column>
            <Column span={5}>
            </Column>
            <Column span={4}>
              <Box paddingX={2} >
                  <Button text="Tham gia" color="blue" onClick={e => {this.changePage('game'); this.state.socket.emit('create'); this.loadQuestions()}}/>
              </Box>
            </Column>
          </Box>
          :
          (this.state.route === "profile") ?
          <Box
          alignItems="center"
          direction="row"
          display="flex"
          width="100%"
          height="4rem"
          paddingY={2}
          color="white"
        > 
          <Column span={3}>
            <Box paddingX={2} >
              <IconButton icon="arrow-back" onClick={e => {this.changeRoute('home')}} accessibilityLabel="back"/>
            </Box>
          </Column>
          <Column span={4}>
          </Column>
          <Column span={5}>
            <Box paddingX={2}>
                <Button text="Đăng xuất" color="red" onClick={e => {localStorage.removeItem('token'); this.changePage('login')}}/>
            </Box>
          </Column>
        </Box>
        :  (this.state.route === "infoshop") ?
        <Box
          alignItems="center"
          direction="row"
          display="flex"
          width="100%"
          height="4rem"
          paddingY={2}
          color="white"
        > 
          <Column span={3}>
            <Box paddingX={2} >
              <IconButton icon="arrow-back" onClick={e => {this.changeRoute('shopping')}} accessibilityLabel="back"/>
            </Box>
          </Column>
          <Column span={4}>
          </Column>
          <Column span={5}>
            <Box paddingX={2} >
              <Button text={this.state.buy["" + this.state.choosePackage + ""] ? "Đã mua" : "Mua ngay"}  onClick={e => this.buyPackage(this.state.choosePackage)} color={this.state.buy["" + this.state.choosePackage + ""] ? "blue" : "gray"}></Button>
            </Box>
          </Column>
        </Box> :
            <Box
              alignItems="center"
              direction="row"
              display="flex"
              width="100%"
              height="3rem"
              paddingY={2}
              color="white"
            >
              <Box paddingX={2} width="4">
                <div onClick={e => this.changeRoute('profile')}>
                  <Avatar name={this.state.name} size='sm' src={this.state.avatar}/>
                </div>
              </Box>
              <Box>
                <Text> xin chào </Text>
              </Box>
              <Box paddingX={1}>
                <Text weight="bold"> {this.state.name} </Text>
              </Box> 
            </Box> 
          }
        
        <Divider />
        <Divider />

        <Box margin={2} display={this.state.show ? "block" : "none"}>
          <Spinner accessibilityLabel="data spinner" show={this.state.show}/>
        </Box>

        <Box height={this.state.route === "profile" || this.state.route === "info" || this.state.route === "infoshop" ? "calc(100vh - 4rem - 3.8rem)" : "calc(100vh - 3rem - 3.8rem)"} width="100%" overflow="scrollY">
          {
            this.state.route === "home" ? 
              <Home onGoShopping={() => this.changeRoute('shopping')} onGoInfo={(index) => {this.changeRoute('info'); this.choosePackage(index)}} {...this.state}/> : 
              this.state.route === "ranking" ? 
                <Ranking {...this.state}/> :
                this.state.route === "event" ?
                  <Event {...this.state} onGoInfo={(index, route) => {this.changeRoute(route); this.choosePackage(index)}}/>:
                  this.state.route === "mission" ?
                    <Mission {...this.state}/> : 
                    this.state.route === "shopping" ?
                      <Shopping {...this.state} buyPackage={value => this.buyPackage(value)} onGoInfo={(index) => {this.changeRoute('infoshop'); this.choosePackage(index)}}/> : 
                      this.state.route === "profile" ?
                        <Profile {...this.state}/> : <Info {...this.state}/>
          }
        </Box>

        <Divider />
        <Divider />
        <Box 
          position="fixed"
          bottom
          left
          direction = "row"
          display = "flex"
          width = "100%"
          height = "3.6rem"
          color = "white"
        >
            <Box justifyContent="center" width="20%" display="flex" alignItems="center"> 
              <TiHomeOutline size="27" color={this.state.route === "home" ? "#59a5d8" : "#8e8e8e"} onClick={e => this.changeRoute('home')}/> 
            </Box>
            <Box justifyContent="center" width="20%" display="flex" alignItems="center"> 
              <TiChartAreaOutline size="27" color={this.state.route === "ranking" ? "#59a5d8" : "#8e8e8e"} onClick={e => this.changeRoute('ranking')}/> 
            </Box>
            <Box justifyContent="center" width="20%" display="flex" alignItems="center"> 
              <TiCalendarOutline size="27" color={this.state.route === "event" ? "#59a5d8" : "#8e8e8e"} onClick={e => this.changeRoute('event')}/> 
            </Box>
            <Box justifyContent="center" width="20%" display="flex" alignItems="center"> 
              <TiTags size="27" color={this.state.route === "mission" ? "#59a5d8" : "#8e8e8e"} onClick={e => this.changeRoute('mission')}/> 
            </Box>
            <Box justifyContent="center" width="20%" display="flex" alignItems="center"> 
              <TiShoppingCart size="27" color={this.state.route === "shopping" ? "#59a5d8" : "#8e8e8e"} onClick={e => this.changeRoute('shopping')}/> 
            </Box>
        </Box>
      </Box>
      </PullToRefresh>
    )
  }
}

export default Main;