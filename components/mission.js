import React from 'react';
import {Box, Avatar, Text, Divider, Column, Heading, Image, Mask} from "gestalt";
import {TiHomeOutline, TiChartAreaOutline, TiCalendarOutline, TiTags, TiShoppingCart} from "react-icons/ti";

class Mission extends React.Component {
  render() {
    return(
      <Box>
        <Box padding={3}>
          <Text weight="bold" size="sm">Hãy hoàn thành đầy đủ các nhiệm vụ nào!</Text>
        </Box>
        { 
          this.props.mission.length === 0 ?  
          <Box color="darkGray" shape="pill" marginTop={5}>
            <Text color="white" weight="bold" size="sm">
                <Box padding={3} paddingX={5}>
                    Chúc mừng bạn đã hòan thành hết các nhiệm vụ!
                </Box>
            </Text>
          </Box>:
          this.props.mission.map((event, index) => {
            return(
              <Box key={index}>
              <Box padding={2}>
                <Box padding={2}><Heading size="xs">20 tháng 11</Heading></Box>
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
                        <Box><Text weight="bold">{event.eventTitle}</Text></Box>
                      </Column>
                      <Column span={12}>
                        <Box><Text>{event.eventDescription}</Text></Box>
                      </Column>
                      <Column span={12}>
                        <Box>
                          { 
                            event.eventImage?
                            <Mask shape="rounded">
                              <Image
                                naturalHeight={1}
                                naturalWidth={1}
                                alt="event"
                                src={event.eventImage}
                              />
                            </Mask> : <div></div>
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
    )
  }
}

export default Mission;