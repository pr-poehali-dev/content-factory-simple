import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import Icon from "@/components/ui/icon";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Integrations = () => {
  const integrations = [
    {
      id: "telegram",
      name: "Telegram",
      icon: "Send",
      color: "bg-blue-500",
      description: "Публикация в каналы и группы Telegram",
      connected: true,
      channels: 3,
    },
    {
      id: "dzen",
      name: "Яндекс.Дзен",
      icon: "Rss",
      color: "bg-orange-500",
      description: "Публикация статей в Яндекс.Дзен",
      connected: true,
      channels: 1,
    },
    {
      id: "deepseek",
      name: "Дипспик",
      icon: "Mic",
      color: "bg-purple-500",
      description: "Публикация аудио контента",
      connected: false,
      channels: 0,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-foreground">Интеграции</h1>
        <p className="text-muted-foreground mt-1">Управляйте подключениями к платформам</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((integration) => (
          <Card key={integration.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 rounded-lg ${integration.color} flex items-center justify-center`}>
                  <Icon name={integration.icon} className="h-6 w-6 text-white" />
                </div>
                <Badge variant={integration.connected ? "default" : "secondary"}>
                  {integration.connected ? "Подключено" : "Не подключено"}
                </Badge>
              </div>
              <CardTitle className="mt-4">{integration.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{integration.description}</p>
              {integration.connected && (
                <div className="text-sm text-muted-foreground mb-4">
                  <Icon name="Hash" className="h-4 w-4 inline mr-1" />
                  {integration.channels} {integration.channels === 1 ? "канал" : "каналов"}
                </div>
              )}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant={integration.connected ? "outline" : "default"} className="w-full">
                    {integration.connected ? "Настроить" : "Подключить"}
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Настройка {integration.name}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="api-key">API ключ</Label>
                      <Input id="api-key" placeholder="Введите API ключ" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="channel-id">ID канала</Label>
                      <Input id="channel-id" placeholder="Введите ID канала" />
                    </div>
                    <Button className="w-full">Сохранить</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Подключенные каналы</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "Мой блог о маркетинге", platform: "Telegram", active: true, subscribers: 12500 },
              { name: "Новости индустрии", platform: "Telegram", active: true, subscribers: 8300 },
              { name: "Креативные идеи", platform: "Telegram", active: false, subscribers: 5200 },
              { name: "Личный блог", platform: "Яндекс.Дзен", active: true, subscribers: 3400 },
            ].map((channel, i) => (
              <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <Icon name="Radio" className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{channel.name}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-sm text-muted-foreground">{channel.platform}</span>
                      <span className="text-sm text-muted-foreground">
                        {channel.subscribers.toLocaleString()} подписчиков
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Switch checked={channel.active} />
                    <span className="text-sm text-muted-foreground">
                      {channel.active ? "Активен" : "Неактивен"}
                    </span>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Icon name="Settings" className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Integrations;
