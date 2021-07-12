import React from 'react'
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react'

export default function Footer() {
  return (
    <div>
      <Segment inverted
        vertical
        style={{
          position: "static",
          bottom: "0px",
          padding: "80px",
          width: "100%",
        }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={7}>
                <Header as='h4' inverted>
                  HRMS - Human Resources Management System
                </Header>
                <p>İnsan kaynakları yönetim sistemi (HRMS) (insan kaynakları bilgi sistemi (HRIS) veya insan 
                    sermayesi yönetimi (HCM) olarak da bilinir) bir tür insan kaynakları yönetimi (İK) yazılımıdır. İnsan kaynaklarının, iş süreçlerinin ve verilerin kolay yönetimini sağlamak için bir dizi sistemi ve süreci birleştirir. </p>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  <List.Item as='a'>Sitemap</List.Item>
                  <List.Item as='a'>Contact Us</List.Item>
                  <List.Item as='a'>Religious Ceremonies</List.Item>
                  <List.Item as='a'>Gazebo Plans</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                  <List.Item as='a'>Banana Pre-Order</List.Item>
                  <List.Item as='a'>DNA FAQ</List.Item>
                  <List.Item as='a'>How To Access</List.Item>
                  <List.Item as='a'>Favorite X-Men</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <br></br><br></br>
          <p> Tüm hakları saklı falan değildir. 💗 ve ☕ ile yapıldı!</p>
          <p> Powered by Kübra Nur BAYINDIR.</p>
        </Container>
      </Segment>
    </div>
  )
}