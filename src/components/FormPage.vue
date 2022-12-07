<template>
  <section class="cta container">
    <div class="left-side">
      <div class="intros">send a message</div>
      <h2>Get in <span class="green">Touch</span></h2>
      <p>We will respond to your message as soon as possible.</p>

      <form @submit.prevent>
        <label class="form-container" for="form">
          <img src="@/assets/img/image1.png" alt="form-name">
        <input class="simple" type="text" name="name" id="name" placeholder="Name" required>
        <input class="simple" type="email" name="mail" id="mail" placeholder="Email" required>
        <input class="simple" type="number" name="phone" id="phone" placeholder="Phone" required>
        <select class="simple" name="gender" id="gender" required>
          <option selected="true" disabled="disabled">More Info</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <textarea class="large" name="message"
        id="message" cols="30" rows="8"
        placeholder="Message"></textarea>
        </label>
        <button class="btn btn-green">send</button>
      </form>
    </div>

    <div class="right-side">
      <h3>Example Inc.</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <ul>
        <li><a href="!">
          <div class="icon"><font-awesome-icon icon="fa-solid fa-phone" /></div>
          +1 (305) 1234-5678
        </a></li>
        <li><a href="!">
          <div class="icon"><font-awesome-icon icon="fa-solid fa-envelope" /></div>
          hello@example.com
        </a></li>
        <li><a href="!">
          <div class="icon"><font-awesome-icon icon="fa-solid fa-location-dot"/></div>
          Main Avenue, 987
        </a></li>
      </ul>
      <button class="btn btn-white">view map</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FormPage',
};
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.container {

  margin: 7rem auto;
  color: $primary-text-color;
}

.left-side {
  display: flex;
  flex-direction: column;
  width: 60%;
  flex: 0 1 auto;

    h2{
      margin-bottom: 2rem;
      color: black;
    }
}

.form-container{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  margin: 3rem 0;

  position: relative;

    img {
      position: absolute;
      top: 15px;
      left: 325px;
    }
}

.simple {
  width: calc((100% - 1rem ) /2);
  font-size: 20px;
  padding: .7rem;

  border: 0;
  background-color: #ECECEC;
}
.large {
  width: 100%;
  font-size: 20px;
  padding: .7rem;

  border: 0;
  background-color: #ECECEC;
}

.right-side {
  width: 40%;
  padding: 0 3rem;

  h3 {
    color: black;
    margin-bottom: 1.5rem;
  }

  p{
    margin-bottom: 1.5rem;
  }

  a {
    display: flex;
    align-items: center;
    color: $primary-color;
  }

  li {
    margin-bottom: 2rem;
  }

  .icon{
    display: flex;
    align-items: center;
    justify-content: center;

    height: 50px;
    width: 50px;
    background-color: rgba($color: $primary-color, $alpha: .3);

    padding: .8rem;
    margin-right: 1rem;
    border-radius: 50%;

    font-size: 20px;
  }
}

</style>
