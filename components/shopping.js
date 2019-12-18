import React from 'react';
import {Box, Avatar, Text, Divider, Column, SegmentedControl, Mask, Image, Button, Touchable, Modal} from "gestalt";
import {TiGroupOutline, TiUserOutline} from "react-icons/ti";

class Shopping extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleSmall = this.handleToggleSmall.bind(this)
    this.state = {
      itemIndex: 0,  
      packages: ['familyPackages',
      'childrenPackages',
      'entertainmentPackages',
      'competitionPackages'],
      sm: false
    };
    this.handleItemChange = this.handleItemChange.bind(this);
  }

  handleItemChange({ activeIndex }) {
    this.setState(prevState => ({ itemIndex: activeIndex }));
  };

  handleToggleSmall() {
    this.setState(prevState => ({ sm: !prevState.sm }));
  }

  render() {
    const items = [
      <TiGroupOutline size={20} color="#8e8e8e"/>, 
      <TiUserOutline size={20} color="#8e8e8e"/>,
      "GIải trí",
      "Solo"
    ];
    return(
      <Box>
        <Box padding={3}>
          <Text weight="bold" size="sm">Chào mừng các bạn đến với cửa hàng. Hãy chọn những gói kiến thức để rèn luyện kỹ năng nào!</Text>
        </Box>
        <Box padding={1} height="3rem">
          <SegmentedControl
            items={items}
            selectedItemIndex={this.state.itemIndex}
            onChange={this.handleItemChange}
            responsive
          ></SegmentedControl>
        </Box>
        { 
          this.props[this.state.packages[this.state.itemIndex]].length === 0 ?  
                    <Box color="darkGray" shape="pill" marginTop={5}>
                      <Text color="white" weight="bold">
                          <Box padding={3} paddingX={5}>
                              Không có gói nào
                          </Box>
                      </Text>
                    </Box>:
        <Box display="flex" paddingY={3}>
          <Column span={6}>
            <Box display="flex" direction="column" padding={1}>
                  {
                    this.props[this.state.packages[this.state.itemIndex]].map((value, index) => {
                      if(index % 2 === 0) return (
                        <Column span={12} key={value}>
                          <Box height="32vh" marginTop={4}>
                          <Touchable
                                mouseCursor="zoomIn"
                                shape="rounded"
                                onTouch={e => this.props.onGoInfo(value)}
                            >
                            <Mask shape="rounded" willChangeTransform={false} width="100%" height="25vh">
                              <Image
                                  alt="Antelope Canyon"
                                  src={this.props.allPackages[value].packageImage}
                                  naturalHeight={1}
                                  naturalWidth={1}
                                  children= {
                                    <Box height="100%" width="100%" color="transparentDarkGray">
                                      <Box padding={2} position="absolute" bottom width="100%">
                                        <Box width="100%"><Text color="white" weight="bold" truncate>{this.props.allPackages[value].packageTitle}</Text></Box>
                                        <Box width="100%"><Text color="white" truncate>{this.props.allPackages[value].packageDescription}</Text></Box>
                                      </Box>
                                    </Box>
                                  }
                              />
                            </Mask>
                            </Touchable>
                            <Box paddingY={2}>
                              <Button text={this.props.buy["" + value + ""] ? "Đã mua" : "Mua ngay"} onClick={e => {this.handleToggleSmall()}} color={this.props.buy["" + value + ""] ? "blue" : "gray"}></Button>
                            </Box>
                          </Box>
                        </Column>)
                    })
                  }
            </Box>
          </Column>
          <Column span={6}>
            <Box display="flex" direction="column" padding={1}>
                  {
                    this.props[this.state.packages[this.state.itemIndex]].map((value, index) => {
                      if(index % 2 === 1) return (
                        <Column span={12} key={value}>
                          <Box height="32vh" marginTop={4}>
                            <Touchable
                                mouseCursor="zoomIn"
                                shape="rounded"
                                onTouch={e => this.props.onGoInfo(value)}
                            >
                            <Mask shape="rounded" willChangeTransform={false} width="100%" height="25vh">
                                <Image
                                    alt="Antelope Canyon"
                                    src={this.props.allPackages[value].packageImage}
                                    naturalHeight={1}
                                    naturalWidth={1}
                                    children= {
                                      <Box height="100%" width="100%" color="transparentDarkGray">
                                        <Box padding={2} position="absolute" bottom width="100%">
                                          <Box width="100%"><Text color="white" weight="bold" truncate>{this.props.allPackages[value].packageTitle}</Text></Box>
                                          <Box width="100%"><Text color="white" truncate>{this.props.allPackages[value].packageDescription}</Text></Box>
                                        </Box>
                                      </Box>
                                    }
                                />
                              </Mask>
                              </Touchable>
                            <Box paddingY={2}>
                              <Button text={this.props.buy["" + value + ""] ? "Đã mua" : "Mua ngay"}  onClick={e => {this.handleToggleSmall()}} color={this.props.buy["" + value + ""] ? "blue" : "gray"}></Button>
                              {
                              this.state.sm && (
                              <Modal
                                accessibilityCloseLabel="close"
                                accessibilityModalLabel="confirm"
                                heading="Xác nhận"
                                onDismiss={this.handleToggleSmall}
                                size="sm"
                              >
                                <Box padding={2}>
                                  <Text align="center">Bạn có muốn mua gói này ?</Text>
                                </Box>
                                <Box padding={2} display="flex">
                                  <Column span={6}>
                                    <Box padding={1}>
                                      <Button text="Có" color="blue" onClick={e => {this.props.buyPackage(value); this.handleToggleSmall()}}/>
                                    </Box>
                                  </Column>
                                  <Column span={6}>
                                    <Box padding={1}>
                                      <Button text="Không" color="red" onClick={e => {this.handleToggleSmall()}}/>
                                    </Box>
                                  </Column>
                                </Box>
                              </Modal>
                              )}
                            </Box>
                          </Box>
                        </Column>)
                    })
                  }
            </Box>
          </Column>
        </Box>
      }
      </Box>
    )
  }
}

export default Shopping;