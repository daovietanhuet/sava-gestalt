import React from 'react';
import {Box, Avatar, Text, Divider, Column, Heading, Image, Mask, IconButton, Icon} from "gestalt";
import {TiHomeOutline, TiChartAreaOutline, TiCalendarOutline, TiTags, TiShoppingCart} from "react-icons/ti";

class Result extends React.Component {
  render() {
    return(
      <Box>
         <Box
                alignItems="center"
                direction="row"
                display="flex"
                width="100%"
                height="3rem"
                paddingY={2}
                color="white"
            > 
                <Column span={3}>
                <Box paddingX={2} >   
                    <IconButton icon="arrow-back" accessibilityLabel="back" onClick={e => {this.props.changeRoute('main'); this.props.resetAnswer()}}/>
                </Box>
                </Column>
        </Box>
        <Divider/>
        <Box height="100vh" width="100%" overflow="scrollY">
        { 
          this.props.questions.map((question, index) => {
            let answerSet = [];
            if(!this.props.partnerInfo || this.props.partnerInfo === null) {
              answerSet = [ {name:this.props.name, ...this.props.answers[this.props.id][index]}, null ]
            } else {
              if(this.props.answers[this.props.id][index].time > this.props.answers[this.props.partnerInfo.id][index].time) 
                answerSet = [ {name:this.props.name, ...this.props.answers[this.props.id][index]}, {...this.props.partnerInfo, ...this.props.answers[this.props.partnerInfo.id][index]}]
              else 
                answerSet =  [ {...this.props.partnerInfo, ...this.props.answers[this.props.partnerInfo.id][index]}, {name:this.props.name, ...this.props.answers[this.props.id][index]}]
            }
            return(
              <Box key={index}>
              <Box padding={2}>
                <Box padding={2}><Text weight="bold" size="lg">Câu hỏi {index + 1}</Text></Box>
                <Box display="flex">
                  <Column span={3}>
                    <Box>
                      <Mask shape="circle" width="3rem" height="3rem">
                        <Image
                          src="https://i.ibb.co/TPPhbgy/sava.png"
                          naturalHeight={1}
                          naturalWidth={1}
                          alt="logo"
                        />
                      </Mask>
                    </Box>
                  </Column>
                  <Column span={9}>
                    <Box display="flex" direction="column">
                      <Column span={12}>
                        <Box><Text weight="bold">{question.questionContent}</Text></Box>
                      </Column>
                      <Column span={12}>
                        <Box><Text>Câu trả lời đúng: <Text weight="bold">{question.answers[question.rightAnswer]}</Text></Text></Box>
                      </Column>
                      <Column span={12}>
                        <Box><Text>{question.questionExplain}</Text></Box>
                      </Column>
                      <Column span={12}>
                        <Box paddingY={2}>
                          {
                            answerSet.map((ele, i) => {
                              let result;
                              if(ele && (question.answers.length === 0 || ele.answer === question.rightAnswer)) result = true
                              else result = false
                              if(ele !== null && ele.answer !== null)
                                return(
                                  <Text key={i}>
                                    <Box shape="pill" color={result ? "blue" : "red"} display="flex" alignItems="center">
                                      <Column span={10}>
                                        <Box padding={2}>
                                          <Text color="white">{ele.name} : {ele.time}s</Text>
                                          <Text color="white">{question.answers.length === 0 ? ele.answer : ""}</Text>
                                        </Box>
                                      </Column>
                                      <Column span={2}><Icon icon={result ? "check" : "cancel"} color="white" accessibilityLabel="result"/></Column>
                                    </Box>
                                  </Text>
                                )
                              else return <div key={i}></div>
                            })
                          }
                        </Box>
                      </Column>
                    </Box>
                  </Column>
                </Box>
              </Box>
              <Divider/>
              </Box>
            )}
          )
        }
        </Box>
      </Box>
    )
  }
}

export default Result;