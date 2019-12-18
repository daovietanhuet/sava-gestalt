import {Box, Avatar, Text, Divider, IconButton, Column, Button, Link, Heading, SearchField, Touchable, Mask, Image, Spinner} from "gestalt";
import {TiHomeOutline, TiChartAreaOutline, TiCalendarOutline, TiTags, TiShoppingCart} from "react-icons/ti";

class Game extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
      return(
        <Box>
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
                    <IconButton icon="arrow-back" accessibilityLabel="back" onClick={e => this.props.changeRoute('main')}/>
                </Box>
                </Column>
                <Column span={3}>
                </Column>
                <Column span={6}>
                <Box paddingX={2} >    
                    <Button text="Vào phòng" color="blue" disabled={this.props.room.length < 5 || this.props.loadQuestions} onClick={e => this.props.socket.emit('letgo', this.props.questions)}/>
                </Box>
                </Column>
            </Box>
            <Divider />
            <Box margin={2} display={this.props.loadQuestions ? "block" : "none"}>
                <Spinner accessibilityLabel="data spinner" show={this.props.loadQuestions}/>
            </Box>
            <Box padding={3}>
                <Text weight="bold">Id phòng được tạo ngẫu nhiên người chơi bấm vào "Tự tìm phòng" để tự động sắp phòng</Text>
            </Box>
            <Box padding={2}>
                <Heading size="xs">ID Phòng</Heading>
            </Box>
            <Box>
              <SearchField id="room" value={this.props.room} onChange={({value}) => this.props.changeRoom(value)} accessibilityLabel="room"/>
            </Box>
            <Box paddingY={2}>
              <Button text="Tự tìm phòng" color="red" onClick={e => this.props.socket.emit('joinRandom', this.props.room)}/>
            </Box>
            <Box display="flex">
              <Column span={6}>
                          <Box height="32vh" marginTop={4} padding={1}>
                          {
                          this.props.roomPartner[0] ?
                          <Touchable
                                mouseCursor="zoomIn"
                                shape="rounded"
                            >
                            <Mask shape="rounded" willChangeTransform={false} width="100%" height="25vh">
                              <Image
                                  alt="avatar"
                                  src={this.props.roomPartner[0].avatar}
                                  naturalHeight={1}
                                  naturalWidth={1}
                                  children= {
                                    <Box height="100%" width="100%" color="transparentDarkGray">
                                      <Box padding={2} position="absolute" bottom width="100%">
                                        <Box width="100%"><Text color="white" weight="bold" truncate>{this.props.roomPartner[0].name}</Text></Box>
                                      </Box>
                                    </Box>
                                  }
                              />
                            </Mask>
                            </Touchable> : <div></div>
                          }
                          </Box>
              </Column>
              <Column span={6}>
                        <Box height="32vh" marginTop={4} padding={1}>
                          {
                          this.props.roomPartner[1] ?
                          <Touchable
                                mouseCursor="zoomIn"
                                shape="rounded"
                            >
                            <Mask shape="rounded" willChangeTransform={false} width="100%" height="25vh">
                              <Image
                                  alt="avatar"
                                  src={this.props.roomPartner[1].avatar}
                                  naturalHeight={1}
                                  naturalWidth={1}
                                  children= {
                                    <Box height="100%" width="100%" color="transparentDarkGray">
                                      <Box padding={2} position="absolute" bottom width="100%">
                                        <Box width="100%"><Text color="white" weight="bold" truncate>{this.props.roomPartner[1].name}</Text></Box>
                                        <Box width="100%"><Text color="white" truncate></Text></Box>
                                      </Box>
                                    </Box>
                                  }
                              />
                            </Mask>
                            </Touchable> : <div></div>
                          }
                          </Box>
              </Column>
            </Box>
        </Box>
      )
  }
}

export default Game