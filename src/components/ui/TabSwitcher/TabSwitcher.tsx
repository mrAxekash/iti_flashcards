import * as Tabs from '@radix-ui/react-tabs'

import s from './TabSwitcher.module.scss'

import './styles.css'

export const TabSwitcher = () => {
  return (
    <Tabs.Root className={s.TabsRoot} defaultValue="tab1">
      <Tabs.List className={s.TabsList} aria-label="Manage your account">
        <Tabs.Trigger className={s.TabsTrigger} value="tab1">
          Account
        </Tabs.Trigger>
        <Tabs.Trigger className={s.TabsTrigger} value="tab2">
          Password
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className={s.TabsContent} value="tab1">
        <p className={s.Text}>Make changes to your account here. Click save when you're done.</p>
        <fieldset className={s.Fieldset}>
          <label className={s.Label} htmlFor="name">
            Name
          </label>
          <input className={s.Input} id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className={s.Fieldset}>
          <label className={s.Label} htmlFor="username">
            Username
          </label>
          <input className={s.Input} id="username" defaultValue="@peduarte" />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
          <button className={s.ButtonGreen}>Save changes</button>
        </div>
      </Tabs.Content>
      <Tabs.Content className={s.TabsContent} value="tab2">
        <p className={s.Text}>Change your password here. After saving, you'll be logged out.</p>
        <fieldset className={s.Fieldset}>
          <label className={s.Label} htmlFor="currentPassword">
            Current password
          </label>
          <input className={s.Input} id="currentPassword" type="password" />
        </fieldset>
        <fieldset className={s.Fieldset}>
          <label className={s.Label} htmlFor="newPassword">
            New password
          </label>
          <input className={s.Input} id="newPassword" type="password" />
        </fieldset>
        <fieldset className={s.Fieldset}>
          <label className={s.Label} htmlFor="confirmPassword">
            Confirm password
          </label>
          <input className={s.Input} id="confirmPassword" type="password" />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
          <button className={s.ButtonGreen}>Change password</button>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  )
}
