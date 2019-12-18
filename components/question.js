import {Box, Avatar, Text, Divider, IconButton, Column, Button, Link, Heading, SearchField, Touchable, Mask, Image, TextArea} from "gestalt";
import {TiHomeOutline, TiChartAreaOutline, TiCalendarOutline, TiTags, TiShoppingCart} from "react-icons/ti";
import { Line } from 'rc-progress';

class Question extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
        second: 0,
        questionIndex: 0,
        value: ""
    }
  }

  componentDidMount() {
      setInterval(() => {
          this.setState((prevState) => {return {
              second: prevState.second + 1
          }})
      }, 1000)
  }

  nextQuestion(answer) {
      if(this.state.questionIndex == 9 || this.state.questionIndex + 1 >= this.props.questions.length) {
          this.props.changeRoute('result')
      }
      this.setState((prevState) => {return {
        questionIndex: prevState.questionIndex + 1,
        value: ""
      }})
      this.props.socket.emit('answer', {id: this.props.id, answer: answer, questionIndex: this.state.questionIndex, time: this.state.second})
  }

  handleChange({ value }) {
    this.setState({
      value
    });
  }

  render() {
      return(
        <Box display="flex" direction="column" width="100%" height="100vh">
            <Column span={12}>
                <Box height="55vh">
                    <Box height="3rem" display="flex">
                        <Column span={3}>
                            <Box display="flex" alignItems="center" height="100%" justifyContent="center">
                                <Text weight="bold">{((this.state.second - this.state.second % 60)/60 < 10 ? "0" + (this.state.second - this.state.second % 60)/60 : (this.state.second - this.state.second % 60)/60) + " : " + (this.state.second % 60 < 10 ? "0" + this.state.second % 60 : this.state.second % 60)}</Text>
                            </Box>
                        </Column>
                        <Column span={6}>
                        </Column>
                        <Column span={3}>
                            <Box display="flex" alignItems="center" height="100%">
                                <Text weight="bold">{"ID: " + this.props.room}</Text>
                            </Box>
                        </Column>
                    </Box>
                    <Divider/>
                    <Divider/>
                    <Box width="100%" height={this.props.questions[this.state.questionIndex].questionContent.length > 90 ? "calc(50vh - 3rem)" : "calc(45vh - 3rem)"} padding={1} display={this.props.questions[this.state.questionIndex].questionImage ? "block" : "none"}>
                        <Mask shape="rounded" width="100%" height={this.props.questions[this.state.questionIndex].questionContent.length > 90 ? "calc(50vh - 3rem)" : "calc(45vh - 3rem)"}>
                            <Image
                                src={this.props.questions[this.state.questionIndex].questionImage}
                                naturalHeight={1}
                                naturalWidth={1}
                                alt="question"
                                color="white"
                                children = {
                                    <Box color="transparentDarkGray" height="100%" display={this.props.questions[this.state.questionIndex].questionContent.length > 90 ? "flex" : "none"} padding={1} justifyContent="center" alignItems="center">
                                        <Box width="100%">
                                            <Text color="white" weight="bold" align="center" >{this.props.questions[this.state.questionIndex].questionContent}</Text>
                                        </Box>
                                    </Box>
                                }
                            />
                        </Mask>
                    </Box>
                    <Box width="100%" display={(this.props.questions[this.state.questionIndex].questionContent.length > 90 && this.props.questions[this.state.questionIndex].questionImage)? "none" : "flex"} padding={2} justifyContent="center" alignItems="center" height={this.props.questions[this.state.questionIndex].questionImage ? "10vh" : "calc(55vh - 3rem)"}>
                        <Text size="lg" weight="bold" align="center">{this.props.questions[this.state.questionIndex].questionContent}</Text>
                    </Box>
                </Box>
            </Column>
            <Column span={12}>
                {
                    (this.props.questions[this.state.questionIndex].answers.length === 0)?
                        <Box height="45vh" padding={1}>
                            <TextArea id="answer" onChange={this.handleChange} value={this.state.value} rows={9} />
                            <Box width="5rem" position="fixed" bottom right marginBottom={12} marginRight={4} padding={1}><Button text="Gửi" color="blue" onClick={e => this.nextQuestion(this.state.value)}/></Box>
                            <Box height="14%" display="flex" alignItems="center">
                                <Column span={6}>
                                    <Box width="100%" paddingX={1}>
                                        <Line strokeWidth="8" trailWidth="8" percent={((this.props.answers[this.props.id] ? this.props.answers[this.props.id].length : 0)*100)/10}/>
                                    </Box>
                                </Column>
                                <Column span={6}>
                                    <Box width="100%" paddingX={1}>
                                        <Line strokeWidth="8" trailWidth="8" strokeColor="#ff3355" percent={(10*100)/10}/>
                                    </Box>
                                </Column>
                            </Box>
                        </Box> :
                    (this.props.questions[this.state.questionIndex].answers.length === 2)?
                        <Box height="45vh">
                            <Box height="43%" display="flex">
                                <Box padding={1} height="100%" width="100%">
                                    <div onClick={e => this.nextQuestion(0)} style={{height: "100%", width: "100%"}}>
                                        <Box height="100%" color="gray" shape="rounded">
                                            <div style={{height: "calc(100% - 1rem)", width: "calc(100% - 1rem)", padding:".5rem", backgroundColor: "#45a3e5", borderRadius:".5rem",  display:"flex", justifyContent:"center", alignItems:"center"}}>
                                                <Text weight="bold" color="white" align="center">{this.props.questions[this.state.questionIndex].answers[0]}</Text>
                                            </div>
                                        </Box>
                                    </div>
                                </Box>
                            </Box>
                            <Box height="43%" display="flex">
                                <Box padding={1} height="100%" width="100%">
                                    <div onClick={e => this.nextQuestion(1)} style={{height: "100%", width: "100%"}}>
                                        <Box height="100%" color="gray" shape="rounded">
                                            <div style={{height: "calc(100% - 1rem)", width: "calc(100% - 1rem)", padding:".5rem", backgroundColor: "#ff3355", borderRadius:".5rem",  display:"flex", justifyContent:"center", alignItems:"center"}}>
                                                <Text weight="bold" color="white" align="center">{this.props.questions[this.state.questionIndex].answers[1]}</Text>
                                            </div>
                                        </Box>
                                    </div>
                                </Box>
                            </Box>
                            <Box height="14%" display="flex" alignItems="center">
                                <Column span={6}>
                                        <Box width="100%" paddingX={1}>
                                            <Line strokeWidth="8" trailWidth="8" percent={(this.props.answers[this.props.id] ? this.props.answers[this.props.id].length : 0)*100/10}/>
                                        </Box>
                                </Column>
                                <Column span={6}>
                                    <Box width="100%" paddingX={1}>
                                            <Line strokeWidth="8" trailWidth="8" strokeColor="#ff3355" percent={(10*100)/10}/>
                                    </Box>
                                </Column>
                            </Box>
                        </Box> :
                    (this.props.questions[this.state.questionIndex].answers.length === 4)?
                    <Box height="45vh">
                        <Box height="43%" display="flex">
                            <Column span={6}>
                                <Box padding={1} height="100%" width="100%">
                                    <div onClick={e => this.nextQuestion(0)} style={{height: "100%", width: "100%"}}>
                                        <Box height="100%" shape="rounded">
                                            <div style={{height: "100%", width: "100%", backgroundColor: "#ff3355", borderRadius:".5rem",  display:"flex", justifyContent:"center", alignItems:"center"}}>
                                                <Text weight="bold" color="white" align="center">{this.props.questions[this.state.questionIndex].answers[0]}</Text>
                                            </div>
                                        </Box>
                                    </div>
                                </Box>
                            </Column>
                            <Column span={6}>
                                <Box padding={1} height="100%" width="100%">
                                    <div onClick={e => this.nextQuestion(1)} style={{height: "100%", width: "100%"}}>
                                        <Box height="100%" shape="rounded">
                                            <div style={{height: "calc(100% - 1rem)", width: "calc(100% - 1rem)", padding:".5rem", backgroundColor: "#45a3e5", borderRadius:".5rem",  display:"flex", justifyContent:"center", alignItems:"center"}}>
                                                <Text weight="bold" color="white" align="center">{this.props.questions[this.state.questionIndex].answers[1]}</Text>
                                            </div>
                                        </Box>
                                    </div>
                                </Box>
                            </Column>
                        </Box>
                        <Box height="43%" display="flex">
                            <Column span={6}>
                                <Box padding={1} height="100%" width="100%">
                                    <div onClick={e => this.nextQuestion(2)} style={{height: "100%", width: "100%"}}>
                                        <Box height="100%" shape="rounded">
                                            <div style={{height: "calc(100% - 1rem)", width: "calc(100% - 1rem)", padding:".5rem", backgroundColor: "#66bf39", borderRadius:".5rem",  display:"flex", justifyContent:"center", alignItems:"center"}}>
                                            <Text weight="bold" color="white" align="center">{this.props.questions[this.state.questionIndex].answers[2]}</Text>
                                            </div>
                                        </Box>
                                    </div>
                                </Box>
                            </Column>
                            <Column span={6}>
                                <Box padding={1} height="100%" width="100%">
                                    <div onClick={e => this.nextQuestion(3)} style={{height: "100%", width: "100%"}}>
                                        <Box height="100%" shape="rounded">
                                            <div style={{height: "calc(100% - 1rem)", width: "calc(100% - 1rem)", padding:".5rem", backgroundColor: "#eb670f", borderRadius:".5rem", display:"flex", justifyContent:"center", alignItems:"center"}}>
                                                <Text weight="bold" color="white" align="center">{this.props.questions[this.state.questionIndex].answers[3]}</Text>
                                            </div>
                                        </Box>
                                    </div>
                                </Box>
                            </Column>
                        </Box>
                        <Box height="14%" display="flex" alignItems="center">
                            <Column span={6}>
                                <Box width="100%" paddingX={1}>
                                    <Line strokeWidth="8" trailWidth="8"  percent={((this.props.answers[this.props.id] ? this.props.answers[this.props.id].length : 0)*100)/10}/>
                                </Box>
                            </Column>
                            <Column span={6}>
                                <Box width="100%" paddingX={1}>
                                    <Line strokeWidth="8" trailWidth="8" strokeColor="#ff3355" percent={(10*100)/10}/>
                                </Box>
                            </Column>
                        </Box>
                    </Box> : <div></div>
                }
            </Column>
        </Box>
      )
  }
}

export default Question