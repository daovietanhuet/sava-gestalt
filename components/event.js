import React from 'react';
import {Box, Avatar, Text, Divider, Column, Heading, Image, Mask} from "gestalt";
import {TiHomeOutline, TiChartAreaOutline, TiCalendarOutline, TiTags, TiShoppingCart} from "react-icons/ti";

class Event extends React.Component {
  render() {
    return(
      <Box>
        <Box padding={3}>
          <Text weight="bold" size="sm">Các sự kiện luôn được cập nhật thường xuyên. Hãy sôi nổi tham gia nào!</Text>
        </Box>
        { 
          this.props.events.map((event, index) => {
            return(
              <Box key={index}>
              <Box padding={2}>
                <Box padding={2}><Heading size="xs">{new Date(event.eventDate).getDate()} tháng {new Date(event.eventDate).getMonth() + 1}</Heading></Box>
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
                    <div onClick={e => {this.props.onGoInfo(event.packageIndex, this.props.buy["" + event.packageIndex + ""] ? 'info' : 'infoshop')}}>
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
                    </div>
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

export default Event;