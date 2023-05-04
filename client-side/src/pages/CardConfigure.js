import { React, useState } from "react";

export default function CardConfigure() {
  const [prompt, setPrompt] = useState({
    recipientFName: '',
    relationship: '',
    occasion: '',
    mood: 'happy',
    prose_style: 'Ode',
    theme: '',
    from: 'Username'
  })

  return (
    <main>
      <section className="pages">
        <h1>This is the Card Form.</h1>
        <form>
          <label>
            Recipients First Name:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Their relationship to you?
            <select>
              <option value="partner">Partner</option>
              <option value="wife">Wife</option>
              <option selected value="husband">Husband</option>
              <option value="father">Father</option>
              <option value="mother">Mother</option>
              <option value="brother">Brother</option>
              <option value="sister">Sister</option>
              <option value="uncle">Uncle</option>
              <option value="aunt">Aunt</option>
              <option value="cousin">Cousin</option>
              <option value="boss">Boss</option>
              <option value="employee">Employee</option>
            </select>
          </label>
          <br />
          <label>
            What is the occasion?
            <select>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option selected value="get well">Get Well</option>
              <option value="welcome home">Welcome Home</option>
              <option value="mothers day">Mothers Day</option>
              <option value="fathers day">Fathers Day</option>
              <option value="new baby">New Baby</option>
              <option value="condolences">Condolences</option>
              <option value="congrats">Congrats</option>
              <option value="farewell">Farewell</option>
              <option value="graduation">Graduation</option>
              <option value="just because">Just Because</option>
              <option value="wedding">Wedding</option>
              <option value="thank you">Thank You</option>
              <option value="welcome">Welcome</option>
              <option value="thank you">Thank You</option>
              <option value="Valentines Day">Valentines Day</option>
              <option value="Christmas">Christmas</option>
              <option value="Happy Holidays">Happy Holidays</option>
              <option value="New Year">New Year</option>
              <option value="Easter">Easter</option>
              <option value="Thanksgiving">Thanksgiving</option>
              <option value="St.Patricks Day">St. Patricks Day</option>
              <option value="I'm sorry">Sorry</option>
            </select>
          </label>
          <br />
          <label>
            What Mood Are you in?
            <select>
              <option value="happy">Happy</option>
              <option value="optimistic">Hopeful and Optimistic</option>
              <option value="silly">Silly or Funny</option>
              <option value="sympathy">Symathetic</option>
              <option value="romantic">Romantic</option>
              <option value="excited">Excited</option>
              <option value="fearful">Unsure and Fearful</option>
            </select>
          </label>
          <br />
          <p>What themes would you like to talk about?</p>
          <label>
            Love
            <input
              type="radio"
              name="love"
            />
          </label>
          <label>
            Romance
            <input
              type="radio"
              name="love"
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </section>
    </main>
  );
};